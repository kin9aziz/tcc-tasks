import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { ConfigService } from 'src/app/core/services/config/config.service';
import { APP_CONFIG, AppConfig } from 'src/app/core/app.config';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  core$!: Subscription;
  constructor(
      @Inject(APP_CONFIG) public core: AppConfig,
      @Inject(DOCUMENT) private document: any,
      private title: Title,
      private configService: ConfigService,
      private translate: TranslateService
  ){
  }

  ngOnInit() {
    this.translate.setDefaultLang('en');
    this.core$ = this.configService.getAppConfigObservable().subscribe(core =>{
      if(!core) return;
      this.core = core;
      this.title.setTitle(this.core.appName!);
      this.document.body.dir = this.core.selectedLanguage?.direction?? 'ltr';
      if(this.core.darkMode){
        this.document.body.setAttribute('data-layout-mode', "dark");
        this.document.body.setAttribute('data-sidebar', "dark");
      } else{
        this.document.body.setAttribute('data-layout-mode', "light");
        this.document.body.setAttribute('data-sidebar', "light");
      }
      this.translate.use(this.core?.selectedLanguage?.code?? 'en');
    });
  }

  ngOnDestroy() {
    if(this.core$) this.core$.unsubscribe();
  }

}
