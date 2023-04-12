import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { ConfigService } from '../services/config/config.service';

@Injectable({ providedIn: 'root' })
export class PermissionGuard implements CanActivate {
    constructor(
        private router: Router,
        private configService: ConfigService,
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const core = this.configService.appSettingsValues;
        console.log('PermissionGuard', core.user);
        return true;
        // if (isUserAuthenticated) return true;
        // this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url } });
        // return false;
    }
}
