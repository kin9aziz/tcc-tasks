import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
@Component({
    selector: 'app-modal',
    standalone: true,
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss'],
    imports: [NgIf]
})
export class ModalComponent {
    @Input() content: { message: string; title: string; closeBtn?: string; saveBtn?: string; type?: string; } = {message: '', title: ''};
    constructor(
        public activeModal: NgbActiveModal,
        private router: Router
        ) {}
    OnDismiss(){
        console.log('OnDismiss');
        this.activeModal.dismiss('Close dismiss')
    }
    onClose(){
        console.log('onClose', this.content);
        if(this.content.type === 'route'){
            this.router.navigateByUrl('/auth/login', {replaceUrl: true}).then(() =>{
                this.activeModal.close('Close click');
            });
        } else this.activeModal.close('Close click');
    }
    onSave(){
        console.log('onSave');
        this.activeModal.dismiss('dismiss');
    }
}
