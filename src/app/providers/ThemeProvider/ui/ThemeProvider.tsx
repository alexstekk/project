import React, { ReactNode, useEffect, useState } from 'react';

import { ThemeContext } from '../../../../shared/lib/context/ThemeContext';

import { useJsonSettings } from '@/entities/User';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localstorage';
import { Theme } from '@/shared/const/theme';

interface ThemeProviderProps {
    children: ReactNode;
    initialTheme?: Theme;
}

const fallbackTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme;

export const ThemeProvider = (props: ThemeProviderProps) => {
    const { children, initialTheme } = props;

    const { theme: defaultTheme } = useJsonSettings();

    const [isThemeInited, setIsThemeInited] = useState(false);

    const [theme, setTheme] = useState<Theme>(
        initialTheme || fallbackTheme || Theme.LIGHT,
    );

    useEffect(() => {
        if (!isThemeInited && initialTheme) {
            setTheme(initialTheme);
            setIsThemeInited(true);
        }
    }, [initialTheme, isThemeInited]);

    const defaultProps = {
        theme,
        setTheme,
    };

    useEffect(() => {
        document.body.className = theme;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
