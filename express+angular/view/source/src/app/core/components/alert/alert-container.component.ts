import { Component, TemplateRef } from '@angular/core';
import { AlertService } from 'src/app/core/services/alert/alert-service';
import { NgForOf, NgIf, NgTemplateOutlet } from '@angular/common';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-toasts',
  standalone: true,
  imports: [NgbToastModule, NgIf, NgTemplateOutlet, NgForOf],
  template: `
		<ngb-toast
			*ngFor="let toast of alertService.toasts"
			[class]="toast.classname"
			[autohide]="true"
			[delay]="toast.delay || 5000"
			(hidden)="alertService.remove(toast)">
			<ng-template [ngIf]="isTemplate(toast)" [ngIfElse]="text">
				<ng-template [ngTemplateOutlet]="toast.textOrTpl"></ng-template>
			</ng-template>
			<ng-template #text>{{ toast.textOrTpl }}</ng-template>
		</ngb-toast>
	`,
  host: { class: 'toast-container position-fixed top-0 end-0 p-3', style: 'z-index: 1200' },
})
export class AlertContainerComponent {
  constructor(public alertService: AlertService) {}

  isTemplate(toast: any) {
    return toast.textOrTpl instanceof TemplateRef;
  }
}