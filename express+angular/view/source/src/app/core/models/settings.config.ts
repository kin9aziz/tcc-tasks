import { InjectionToken } from '@angular/core';
export let SETTING_CONFIG = new InjectionToken<SettingsConfig>("settings.config");
import { User } from 'src/app/core/models/auth.models';
import { Settings } from 'src/app/core/models/settings.models';

export interface SettingsConfig {
    setting?: Settings;
    user?: User;
}
export const BaseSettingsConfig: SettingsConfig = {
    setting: {
        theme: { appName: 'LABEEB LIGHT', version: '1.0.0', logo:'assets/images/logo/logo.png',  darkMode: false, switchTimer: 60, hideMenu: true, hideNavbar: true, hideFooter: true, isRTL: false },
        availableLanguages: [{ code: 'en', name: 'English', flag: 'us', direction: 'ltr'}, { code: 'ar', name: 'Arabic', flag: 'sa', direction: 'rtl'}],
        selectedLanguage: { code: 'ar', name: 'Arabic', flag: 'sa', direction: 'rtl'},
    },
    user: {},
};


