import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from 'src/app/core/services/config/config.service';

export function initializer(configService: ConfigService) {
  return () => configService.initializerApp();
}

@NgModule({
  imports: [ HttpClientModule ],
  providers: [
    ConfigService,
    { provide: APP_INITIALIZER, useFactory: initializer, deps: [ConfigService], multi: true }
  ]
})
export class AppConfigModule { }

