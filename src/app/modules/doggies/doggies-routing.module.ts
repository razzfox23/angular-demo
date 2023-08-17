import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminRoleGuard } from 'src/app/core/guards/admin-role.guard';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { DoggiesPageComponent } from './page/doggies-page/doggies-page.component';
import { DoggiesCreateComponent } from './components/doggies-create/doggies-create.component';
import { DoggiesDeleteComponent } from './components/doggies-delete/doggies-delete.component';

const routes: Routes = [
  {
    path: '',
    component: DoggiesPageComponent
  },
  {
    path: 'doggie/create',
    component: DoggiesCreateComponent,
    canActivate: [AuthGuard] // AuthGuard check if you are logged
  },
  {
    path: 'doggie/delete',
    component: DoggiesDeleteComponent,
    canActivate: [AuthGuard, AdminRoleGuard] // AuthGuard check if you are logged and AdminRole neeeds to have "ADMIN" role to access to delete a dog
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoggiesRoutingModule { }
