import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-account',
  templateUrl: './footer-account.component.html',
  styleUrls: ['./footer-account.component.scss']
})

export class FooterAccountComponent {
  brand: string = 'Abdulaziz Alqahtani'
  year: number = new Date().getFullYear();
  constructor(
  ) {

  }
}
