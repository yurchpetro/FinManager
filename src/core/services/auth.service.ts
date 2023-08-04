import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { from, Observable } from 'rxjs';
import firebase from 'firebase/compat';

@Injectable()
export class AuthService {
    constructor(public auth: AngularFireAuth) {}

    // Sign in with email/password
    public signInWithEmail(email: string, password: string): Observable<firebase.auth.UserCredential> {
        return from(this.auth.signInWithEmailAndPassword(email, password));
    }

    // Sign out
    public signOut(): Observable<void> {
        return from(this.auth.signOut());
    }
}
