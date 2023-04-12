import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[defaultImg]'
})

export class ImageValidateDirective {
  constructor(public el: ElementRef) {
  }
  @HostListener('error') error() {
    this.el.nativeElement.src = 'assets/images/users/avatar.png';
  }
  @HostListener('ionError') ionError() {
    this.el.nativeElement.src = 'assets/images/users/avatar.png';
  }
}
