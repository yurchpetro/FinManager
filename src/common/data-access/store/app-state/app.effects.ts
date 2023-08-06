// import { Injectable } from '@angular/core';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { Action, Store } from '@ngrx/store';
//
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';
//
// import { FeaturePartialState } from '../feature.state';
// import { fromAdminActiveShareClassActions } from './app.actions';
// import { fromAdminActiveShareClassAsyncActions } from '../admin-active-share-class-async/admin-active-share-class-async.actions';
//
// @Injectable()
// export class AppEffects {
//     public onLoadShareClassSuccess$: Observable<Action> = createEffect(() => {
//         return this.actions$.pipe(
//             ofType(fromAdminActiveShareClassAsyncActions.LoadSuccess),
//             map(({ shareClass }: fromAdminActiveShareClassAsyncActions.LoadSuccess) => {
//                 return fromAdminActiveShareClassActions.SetActiveShareClass({ shareClass });
//             })
//         );
//     });
//
//     constructor(
//         private readonly store: Store<FeaturePartialState>,
//         private readonly actions$: Actions
//     ) {}
// }
