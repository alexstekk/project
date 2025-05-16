import { createContext } from 'react';
import { Theme } from '../../const/theme';

export interface ThemeContextValue {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextValue>({});

