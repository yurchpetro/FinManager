import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentData } from '@angular/fire/compat/firestore';
import { DASHBOARD_FIREBASE_CONFIG } from '@common/utils';
import { Observable, take } from 'rxjs';
import { TransactionModel } from '@common/models';
import { map } from 'rxjs/operators';

@Injectable()
export class LoadTransactionService {
    public userCol: AngularFirestoreCollection<any>;

    constructor(db: AngularFirestore) {
        this.userCol = db.collection(DASHBOARD_FIREBASE_CONFIG.USERS);
    }

    public onLoad(userId: string, mounth: string): Observable<TransactionModel[]> {
        return this.userCol
            .doc(userId)
            .collection(DASHBOARD_FIREBASE_CONFIG.TRANSACTIONS)
            .doc(mounth)
            .collection(DASHBOARD_FIREBASE_CONFIG.TRANSACTION)
            .valueChanges()
            .pipe(
                map((doc: DocumentData[]) => {
                    return doc as TransactionModel[];
                }),
                take(1)
            );
    }
}
