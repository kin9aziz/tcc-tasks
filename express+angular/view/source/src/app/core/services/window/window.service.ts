import { Injectable, Inject } from '@angular/core';
import { WINDOW } from './window.provider';

@Injectable()
export class WindowService {
    constructor(@Inject(WINDOW) private window: Window) {
    }
    getHostname() : string {
        return this.window.location.hostname;
    }
}