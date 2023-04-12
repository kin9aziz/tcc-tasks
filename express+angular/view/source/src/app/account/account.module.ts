import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core/core.module';
import { NgOtpInputModule } from 'ng-otp-input';
import { defineLordIconElement } from 'lord-icon-element';
import lottie from 'lottie-web';
import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [LoginComponent ],
  imports: [
    CommonModule,
    CoreModule,
    AccountRoutingModule,
    NgOtpInputModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AccountModule {
  constructor() {
    defineLordIconElement(lottie.loadAnimation);
  }
}
