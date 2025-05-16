import { useContext } from 'react';

import { Theme } from '../../../const/theme';
import { ThemeContext } from '../../context/ThemeContext';

import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localstorage';


export interface useThemeResult {
    toggleTheme: VoidFunction;
    theme?: Theme;
}

export function useTheme(): useThemeResult {

    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        let newTheme: Theme;

        switch (theme) {
            case Theme.DARK:
                newTheme = Theme.LIGHT;
                break;
            case Theme.LIGHT:
                newTheme = Theme.ORANGE;
                break;
            case Theme.ORANGE:
                newTheme = Theme.DARK;
                break;
            default:
                newTheme = Theme.LIGHT;
        }

        if (setTheme) {
            setTheme(newTheme);
        }

        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };


    return {
        theme,
        toggleTheme,
    };

}