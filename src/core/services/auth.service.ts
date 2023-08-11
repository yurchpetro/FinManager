import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BehaviorSubject, distinctUntilChanged, from, Observable, of } from 'rxjs';
import firebase from 'firebase/compat';
import { LocalStorageService } from './local-storage.service';
import { ROUTES_ENUM, RoutesType } from '../enums/routes.enum';
import { Router } from '@angular/router';
import { InitUserService } from './init-user.service';
import { AppFeatureFacade } from '@common/data-access';
import { UserModel } from '@common/models';

@Injectable()
export class AuthService {
    public readonly isLoggedIn$: Observable<boolean>;
    private readonly defaultRedirect: RoutesType = ROUTES_ENUM.DASHBOARD;

    private readonly userSource: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(
        private readonly auth: AngularFireAuth,
        private readonly localStorageService: LocalStorageService,
        private readonly router: Router,
        private readonly initUserService: InitUserService,
        private readonly appFeatureFacade: AppFeatureFacade
    ) {
        this.autoLogin();
        this.isLoggedIn$ = this.userSource.pipe(distinctUntilChanged());
    }

    public signInWithEmail(email: string, password: string): Observable<firebase.auth.UserCredential> {
        const signIn: Promise<firebase.auth.UserCredential> = this.auth.signInWithEmailAndPassword(email, password);
        this.setLoginState(signIn);
        return from(signIn);
    }

    public signUpWithEmail(email: string, password: string): Observable<firebase.auth.UserCredential> {
        const signUp: Promise<firebase.auth.UserCredential> = this.auth.createUserWithEmailAndPassword(email, password);
        this.setLoginState(signUp);
        signUp.then((userCredential: firebase.auth.UserCredential): void => {
            if (userCredential.user) {
                this.initUserService.init(userCredential.user);
            }
        });
        return from(signUp);
    }

    public signOut(): Observable<void> {
        this.userSource.next(false);
        this.localStorageService.removeItem('accessToken');
        void this.router.navigate([ROUTES_ENUM.HOME]);
        return from(this.auth.signOut());
    }

    private setLoginState(promise: Promise<firebase.auth.UserCredential>): void {
        promise
            .then(async (userCredential: firebase.auth.UserCredential): Promise<void> => {
                if (userCredential.user) {
                    this.localStorageService.setItem('accessToken', await userCredential.user.getIdToken());
                    this.userSource.next(true);
                    const currentUser: UserModel = {
                        displayName: userCredential.user.displayName,
                        email: userCredential.user.email,
                        emailVerified: userCredential.user.emailVerified,
                        photoURL: userCredential.user.photoURL,
                        uid: userCredential.user.uid,
                    };

                    this.appFeatureFacade.setUser(currentUser);
                }
            })
            .catch((): void => {
                this.userSource.next(false);
                this.localStorageService.setItem('accessToken', 'null');
            });
    }

    private autoLogin(): Observable<firebase.auth.UserCredential | null> {
        const authToken: string | null = this.getStoredAuthToken();

        if (authToken) {
            const autoLogin: Promise<firebase.auth.UserCredential> = this.auth.signInWithCustomToken(authToken);
            autoLogin.then((): void => {
                this.userSource.next(true);
                this.redirectTo();
            });

            return from(autoLogin);
        } else {
            return of(null);
        }
    }

    private getStoredAuthToken(): string | null {
        return localStorage.getItem('accessToken');
    }

    private redirectTo(): void {
        void this.router.navigate([this.defaultRedirect]);
    }
}
