import { Component, OnDestroy, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigService } from 'src/app/core/services/config/config.service';
import { AppConfig } from 'src/app/core/app.config';
import { HttpService } from 'src/app/core/services/http/http.service';
import { AlertService } from 'src/app/core/services/alert/alert-service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit, OnDestroy {
  form!: UntypedFormGroup;
  submitted = false;
  error = '';
  returnUrl!: string;
  core: AppConfig = {};
  constructor(
      private formBuilder: UntypedFormBuilder,
      private router: Router,
      private route: ActivatedRoute,
      private configService: ConfigService,
      private httpService: HttpService,
      public alertService: AlertService
  ) {

     }

  ngOnInit() {
     this.core = this.configService.appSettingsValues;
     this.form = this.formBuilder.group({
         email: ['', [Validators.required, Validators.email]],
         password: ['', [Validators.minLength(6)]]
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    if(this.core.user && this.core.user!.token) this.router.navigateByUrl(this.returnUrl, {replaceUrl: true});
  }

  ngOnDestroy() {

  }

  get f() { return this.form.controls; }

   onSubmit() {
    this.submitted = true;
    if (this.form.invalid) return;
    const body = {email: this.f['email'].value, password: this.f['password'].value};
    this.httpService.auth('auth/login',body).then((response: any) =>{
        console.log('response', response);
        if(response.token && response.user) {
            this.core.user = response.user;
            this.core.user!.token = response.token;
            this.alertService.show('Welcome Back '+this.core.user?.name, { classname: 'bg-success text-center text-white', delay: 10000 });
            this.configService.setAppConfig(this.core);
            this.router.navigateByUrl('/', {replaceUrl: true});
        }
    });
  }

    onLanguageChange(language: object){
        this.core.isArabic = !this.core.isArabic;
        this.core.selectedLanguage = language;
        this.configService.setAppConfig(this.core);
    }


}
