import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoadDoggies } from 'src/app/state/actions/doggies.actions';
import { AppState } from 'src/app/state/app.state';
import { selectDoggieLoading } from 'src/app/state/selectors/doggies.selectors';

@Component({
  selector: 'app-doggies-page',
  templateUrl: './doggies-page.component.html',
  styleUrls: ['./doggies-page.component.scss']
})
export class DoggiesPageComponent implements OnInit {

  constructor(private store: Store<AppState>){}

  loading$: Observable<boolean> = new Observable();

  ngOnInit(): void {
    this.store.dispatch(LoadDoggies());
    this.loading$ = this.store.select(selectDoggieLoading)
  }

}
