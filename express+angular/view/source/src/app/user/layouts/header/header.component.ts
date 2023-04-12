import { Component, OnInit, EventEmitter, Output, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ConfigService } from 'src/app/core/services/config/config.service';
import { AppConfig } from 'src/app/core/app.config';
import { AlertService } from 'src/app/core/services/alert/alert-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  core: AppConfig = {};
  isFullScreen: boolean = false;
  @Output() mobileMenuButtonClicked = new EventEmitter();


  constructor(
    @Inject(DOCUMENT) private document: any,
    private router: Router,
    private configService: ConfigService,
    public alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.core = this.configService.appSettingsValues;
  }


  toggleMobileMenu(event: any) {
    event.preventDefault();
    this.mobileMenuButtonClicked.emit();
    if (this.document.documentElement.clientWidth <= 1024) this.document.body.classList.toggle('menu');
  }




  onDarkModeChange(mode: string) {
    this.core.darkMode = mode === 'dark';
    this.configService.setAppConfig(this.core);
  }
  onLanguageChange(language: object){
    this.core.isArabic = !this.core.isArabic;
    this.core.selectedLanguage = language;
    this.configService.setAppConfig(this.core);
  }
  logout() {
    this.configService.clearAppConfig();
    // this.router.navigate(['/login']);
  }


  fullscreen() {
    if(this.isFullScreen) return this.onCloseFullscreen();
    else return this.onOpenFullscreen();
  }
  onOpenFullscreen() {
    this.isFullScreen = true;
    if (this.document.documentElement.requestFullscreen) this.document.documentElement.requestFullscreen();
    else if (this.document.documentElement.mozRequestFullScreen) this.document.documentElement.mozRequestFullScreen();
    else if (this.document.documentElement.webkitRequestFullscreen) this.document.documentElement.webkitRequestFullscreen();
    else if (this.document.documentElement.msRequestFullscreen) this.document.documentElement.msRequestFullscreen();
  }
  onCloseFullscreen() {
    this.isFullScreen = false;
    if (this.document.exitFullscreen) this.document.exitFullscreen();
    else if (this.document.mozCancelFullScreen) this.document.mozCancelFullScreen();
    else if (this.document.webkitExitFullscreen) this.document.webkitExitFullscreen();
    else if (this.document.msExitFullscreen) this.document.msExitFullscreen();
  }

}
