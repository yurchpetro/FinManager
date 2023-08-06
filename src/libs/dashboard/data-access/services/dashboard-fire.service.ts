import { Injectable } from '@angular/core';
import { from, Observable, take } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, DocumentData } from '@angular/fire/compat/firestore';
import { CreateTransactionModel, TransactionModel } from '@common/models';
import { DASHBOARD_FIREBASE_CONFIG, IdGeneratorFunction } from '@common/utils';
import { map } from 'rxjs/operators';

@Injectable()
export class DashboardFireService {
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

    public onCreate(userId: string, mounth: string, transaction: CreateTransactionModel): Observable<void> {
        const id: string = IdGeneratorFunction();

        return from(
            this.userCol
                .doc(userId)
                .collection(DASHBOARD_FIREBASE_CONFIG.TRANSACTIONS)
                .doc(mounth)
                .collection(DASHBOARD_FIREBASE_CONFIG.TRANSACTION)
                .doc(id)
                .set({ ...transaction, id })
        );
    }

    public onUpdate(userId: string, mounth: string, transaction: Partial<TransactionModel>): Observable<void> {
        return from(
            this.userCol
                .doc(userId)
                .collection(DASHBOARD_FIREBASE_CONFIG.TRANSACTIONS)
                .doc(mounth)
                .collection(DASHBOARD_FIREBASE_CONFIG.TRANSACTION)
                .doc(transaction.id)
                .update({ ...transaction })
        );
    }

    public onDelete(userId: string, mounth: string, transactionId: string): Observable<void> {
        return from(
            this.userCol
                .doc(userId)
                .collection(DASHBOARD_FIREBASE_CONFIG.TRANSACTIONS)
                .doc(mounth)
                .collection(DASHBOARD_FIREBASE_CONFIG.TRANSACTION)
                .doc(transactionId)
                .delete()
        );
    }
}
