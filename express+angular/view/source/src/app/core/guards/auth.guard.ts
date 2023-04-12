import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { ConfigService } from '../services/config/config.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private configService: ConfigService,
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const isUserAuthenticated = this.configService.isUserAuthenticated;
        if (isUserAuthenticated) return true;
        this.router.navigateByUrl('/login', {replaceUrl: true });
        return false;
    }
}
