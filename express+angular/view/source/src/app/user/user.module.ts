import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { LayoutsModule } from './layouts/layouts.module';


@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    LayoutsModule
  ],
})
export class UserModule {

}
