import { createContext } from 'react';

export enum Theme {
    LIGHT = 'appLightTheme',
    DARK = 'appDarkTheme',
}

export interface ThemeContextValue {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextValue>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';