import { Inject, Injectable, OnDestroy } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { APP_CONFIG, AppConfig, BaseAppConfig } from 'src/app/core/app.config';


@Injectable({
    providedIn: 'root'
})
export class ConfigService implements OnDestroy{
    private database: string = 'TCCSTORAGE';
    private core$ = new BehaviorSubject<AppConfig>({});
    constructor(
        @Inject(APP_CONFIG) public config: AppConfig,
        private router: Router
    ) {

    }

    get appSettingsValues(): AppConfig{
        return this.core$.value;
    }

    get isUserAuthenticated(): boolean{
        return !!(this.core$.value.user?.token);
    }
    get accessToken(): string {
        return this.core$.value.user?.token?? '';
    }
     async initializerApp() {
       const configuration =  (JSON.parse(localStorage.getItem(this.database)!));
       this.setAppConfig(configuration);
    }
    setAppConfig(data?: AppConfig){
        if(data) this.config = data;
        this.core$.next(this.config);
        localStorage.setItem(this.database, JSON.stringify(this.config));
    }
    getAppConfigObservable(): Observable<AppConfig> {
        return this.core$.asObservable();
    }
    async ngOnDestroy() {
        if(this.core$) this.core$.unsubscribe();
    }

    clearAppConfig(){
        localStorage.removeItem(this.database);
        this.setAppConfig(BaseAppConfig);
        console.log('clearAppConfig');
        this.router.navigateByUrl('/login', {replaceUrl: true});
    }

    get generateColor(): string{
        return '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
    }

}
