export class Settings {
    theme?: { appName?: string; version?: string; logo?: string; hideMenu?: boolean; switchTimer?: number; darkMode?: boolean; hideNavbar?: boolean; hideFooter?: boolean; isRTL?: boolean; };
    availableLanguages?: Array<{ code?: string, name?: string, flag?: string, direction?: string }>;
    selectedLanguage?: { code?: string, name?: string, flag?: string, direction?: string };
}
