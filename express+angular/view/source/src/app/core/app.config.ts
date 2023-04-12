import { InjectionToken } from '@angular/core';
import { User } from 'src/app/core/classes/user';

export let APP_CONFIG = new InjectionToken<AppConfig>("app.config");
export interface AppConfig {
  appName?: string;
  availableLanguages?: Array<{ code?: string, name?: string, flag?: string, direction?: string }>;
  selectedLanguage?: { code?: string, name?: string, flag?: string, direction?: string };
  darkMode?: boolean;
  isArabic?: boolean;
  device?: { model?: string, uuid?: string, manufacturer?: string, version?: string, platform?: string, token?: string };
  user?: User;
  accessToken?: string;
}
export const BaseAppConfig: AppConfig = {
  appName: 'TCC',
  availableLanguages: [
    { code: 'en', name: 'English', flag: 'us', direction: 'ltr'},
    { code: 'ar', name: 'Arabic', flag: 'sa', direction: 'rtl'}
  ],
  selectedLanguage: { code: 'ar', name: 'Arabic', flag: 'sa', direction: 'rtl'},
  darkMode: false,
  isArabic: true,
  device: { model: '', uuid: '', manufacturer: '', version: '', platform: '', token: '' },
  user: {}
};


