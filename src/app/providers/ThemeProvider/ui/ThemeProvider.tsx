import React, { ReactNode, useEffect, useState } from 'react';

import { ThemeContext } from '../../../../shared/lib/context/ThemeContext';

import { useJsonSettings } from '@/entities/User';
import { Theme } from '@/shared/const/theme';

interface ThemeProviderProps {
    children: ReactNode;
    initialTheme?: Theme;
}

export const ThemeProvider = (props: ThemeProviderProps) => {
    const { children, initialTheme } = props;

    const { theme: defaultTheme } = useJsonSettings();

    const [isThemeInited, setIsThemeInited] = useState(false);

    const [theme, setTheme] = useState<Theme>(
        initialTheme || defaultTheme || Theme.LIGHT,
    );

    useEffect(() => {
        if (!isThemeInited && defaultTheme) {
            setTheme(defaultTheme);
            setIsThemeInited(true);
        }
    }, [defaultTheme, isThemeInited]);

    const defaultProps = {
        theme,
        setTheme,
    };

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
