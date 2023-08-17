import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { DoggiesService } from 'src/app/modules/doggies/services/doggies.service';

@Injectable()
export class DoggiesEffects {
 
  loadDoggies$ = createEffect(() => this.actions$.pipe(
    ofType('[Doggies Page] Load Doggies'),
    exhaustMap(() => this.doggiesService.retriveData()
      .pipe(
        map(doggies => ({ type: '[Doggies Page] Load Successfully Doggies', doggies })),
        catchError(() => of({ type: '[Doggies Page] Load Error Doggies', doggies: [] }))
      ))
    )
  );
 
  constructor(
    private actions$: Actions,
    private doggiesService: DoggiesService
  ) {}
}