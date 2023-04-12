import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultRoutingModule } from './default-routing.module';
import { CoreModule } from 'src/app/core/core.module';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertContainerComponent } from 'src/app/core/components/alert/alert-container.component';


@NgModule({
  imports: [
    CommonModule,
    DefaultRoutingModule,
    CoreModule,
    NgbToastModule,
    AlertContainerComponent
  ],
})
export class DefaultModule {}
