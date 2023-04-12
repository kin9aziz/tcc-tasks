import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermissionGuard } from 'src/app/core/guards/permission.guard';
import { LayoutComponent } from './layouts/layout.component';

const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full'},
    { path: '', component: LayoutComponent, loadChildren: () => import('./default/default.module').then(m => m.DefaultModule), canActivate: [PermissionGuard]  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
