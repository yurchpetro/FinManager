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
        this.isLoggedIn$.subscribe(console.warn);
    }

    // Sign in with email/password
    public signInWithEmail(email: string, password: string): Observable<firebase.auth.UserCredential> {
        this.auth
            .signInWithEmailAndPassword(email, password)
            .then((): void => {
                this.userSource.next(true);
            })
            .catch((): void => {
                this.userSource.next(false);
            });
        return from(this.auth.signInWithEmailAndPassword(email, password));
    }

    // Sign out
    public signOut(): Observable<void> {
        this.userSource.next(false);
        return from(this.auth.signOut());
    }
}
