import { Injectable } from '@angular/core';
import { from, Observable, take } from 'rxjs';
import { TransactionModel } from '@common/models';
import { DASHBOARD_FIREBASE_CONFIG } from '@common/utils';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { SettingsStateModel } from '@libs/settings/utils';

@Injectable()
export class SettingsFirebaseService {
    public userCol: AngularFirestoreCollection<any>;

    constructor(db: AngularFirestore) {
        this.userCol = db.collection(DASHBOARD_FIREBASE_CONFIG.USERS);
    }

    public onLoad(userId: string): Observable<SettingsStateModel> {
        return this.userCol
            .doc(userId)
            .valueChanges()
            .pipe(
                map(doc => {
                    return doc.settings as SettingsStateModel;
                }),
                take(1)
            );
    }

    public onUpdate(userId: string, settings: SettingsStateModel): Observable<void> {
        return from(this.userCol.doc(userId).update({ settings }));
    }
}
