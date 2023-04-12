import { Injectable, TemplateRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from 'src/app/core/components/modal/modal.component';


@Injectable({ providedIn: 'root' })
export class AlertService {
  toasts: any[] = [];
  constructor(
      private translate: TranslateService,
      private modalService: NgbModal
      ) {
  }
  show(textOrTpl: string | TemplateRef<any>, options: any = {}) {
    if(typeof textOrTpl === 'string' && textOrTpl) textOrTpl = this.translate.instant(textOrTpl);
    this.toasts.push({ textOrTpl, ...options });
    console.log('this.toasts', this.toasts);
  }
  remove(toast: any) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }

  openModal(content: { message: string; title: string; closeBtn?: string; saveBtn?: string; type?: string; }) {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.content.type = content.type;
    modalRef.componentInstance.content.title = this.translate.instant(content.title);
    modalRef.componentInstance.content.message = this.translate.instant(content.message);
    if(content.closeBtn) modalRef.componentInstance.content.closeBtn = this.translate.instant(content.closeBtn);
    if(content.saveBtn) modalRef.componentInstance.content.saveBtn = this.translate.instant(content.saveBtn);
  }

}
