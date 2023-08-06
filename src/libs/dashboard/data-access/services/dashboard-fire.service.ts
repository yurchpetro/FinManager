import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable()
export class DashboardFireService {
    item$: Observable<any>;

    constructor(db: AngularFirestore, adb: AngularFireDatabase) {
        this.item$ = db.collection('categories').valueChanges();
        this.item$.subscribe(console.log);

        db.collection('currency').valueChanges().subscribe(console.log);
    }
}
