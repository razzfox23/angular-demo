import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, waitForAsync } from '@angular/core/testing';

import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';

import { of, ReplaySubject } from 'rxjs';
import { take } from 'rxjs/operators';

import { DoggiesService } from '../../modules/doggies/services/doggies.service';
import { DoggiesEffects } from './doggies.effect';


import * as fromDoggies from '../actions/doggies.actions';
import { doggieListMock } from 'src/app/core/mocks/doggies.mock';

describe('DoggiesEffects', () => {
    let effect: DoggiesEffects;
    let action$: ReplaySubject<Action>;

    let doggiesService: DoggiesService;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            providers: [
                DoggiesEffects,
                provideMockActions(() => action$),
                provideMockStore({
                    initialState: {
                        doggies: null
                    }
                }),
                {
                    provide: DoggiesService,
                    useValue: {
                        getDoggies: jest.fn(() => of(doggieListMock))
                    }
                }
            ],
            schemas: [NO_ERRORS_SCHEMA]
        });

        effect = TestBed.inject(DoggiesEffects);
        doggiesService = TestBed.inject(DoggiesService);
        action$ = new ReplaySubject();
    }));

    it('should be created', () => {
        expect(effect).toBeTruthy();
    });

    it('should get doggies', async () => {
        action$.next(fromDoggies.LoadDoggies());

        const result = await new Promise((resolve) => effect.loadDoggies$.pipe(take(1)).subscribe(resolve));

        expect(doggiesService.retriveData).toHaveBeenCalledWith();
        expect(result).toEqual(
            fromDoggies.LoadSuccessDoggies({
                doggies: doggieListMock
            })
        );
    });
});