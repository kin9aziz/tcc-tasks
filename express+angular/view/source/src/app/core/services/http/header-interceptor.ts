import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpInterceptor, HttpEvent  } from '@angular/common/http';
import { ConfigService } from 'src/app/core/services/config/config.service';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
    constructor(private configService: ConfigService) {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const values = { 'Authorization': `bearer ${this.configService.accessToken}`};
        const request = req.clone({ setHeaders:  values});
        return next.handle(request);
    }
}

