import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';
import { useContext } from 'react';


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