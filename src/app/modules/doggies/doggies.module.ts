import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoggiesRoutingModule } from './doggies-routing.module';
import { DoggiesPageComponent } from './page/doggies-page/doggies-page.component';
import { DoggiesCreateComponent } from './components/doggies-create/doggies-create.component';
import { DoggiesDeleteComponent } from './components/doggies-delete/doggies-delete.component';
import { DoggiesListComponent } from './components/doggies-list/doggies-list.component';
import { DoggiesItemComponent } from './components/doggies-item/doggies-item.component';


@NgModule({
  declarations: [
    DoggiesPageComponent,
    DoggiesCreateComponent,
    DoggiesDeleteComponent,
    DoggiesListComponent,
    DoggiesItemComponent
  ],
  imports: [
    CommonModule,
    DoggiesRoutingModule
  ]
})
export class DoggiesModule { }
