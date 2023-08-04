import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import firebase from 'firebase/compat';

@Injectable()
export class InitUserService {
    private readonly userDoc: string = 'users';

    constructor(private readonly db: AngularFirestore) {}

    public init(user: firebase.User): void {
        void this.db.collection(this.userDoc).doc(user.uid).set({
            transaction: 5,
        });
    }
}
