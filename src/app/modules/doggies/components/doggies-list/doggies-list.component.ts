import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DoggieModel } from 'src/app/core/models/doggie.model';
import { AppState } from 'src/app/state/app.state';
import { selectDoggieList } from 'src/app/state/selectors/doggies.selectors';

@Component({
  selector: 'app-doggies-list',
  templateUrl: './doggies-list.component.html',
  styleUrls: ['./doggies-list.component.scss']
})
export class DoggiesListComponent implements OnInit{

  doggies$: Observable<ReadonlyArray<DoggieModel>> = new Observable();

  constructor(private store: Store<AppState>){}

  ngOnInit(): void {
    this.doggies$ = this.store.select(selectDoggieList)
  }

}
