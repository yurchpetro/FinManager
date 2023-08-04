import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BehaviorSubject, distinctUntilChanged, from, Observable } from 'rxjs';
import firebase from 'firebase/compat';

@Injectable()
export class AuthService {
    public readonly isLoggedIn$: Observable<boolean>;

    private readonly userSource: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(public auth: AngularFireAuth) {
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
        return from(signUp);
    }

    public signOut(): Observable<void> {
        this.userSource.next(false);
        return from(this.auth.signOut());
    }

    private setLoginState(promise: Promise<firebase.auth.UserCredential>): void {
        promise
            .then((): void => {
                this.userSource.next(true);
            })
            .catch((): void => {
                this.userSource.next(false);
            });
    }
}
