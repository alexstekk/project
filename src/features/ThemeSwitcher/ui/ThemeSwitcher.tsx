import { memo } from 'react';

import MoonIcon from '@/shared/assets/icons/solar--moon-bold.svg';
import SunIcon from '@/shared/assets/icons/solar--sun-2-bold.svg';
import { Theme } from '@/shared/const/theme';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Button , ButtonVariants } from '@/shared/ui/Button';


import cls from './ThemeSwitcher.module.scss';


interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
    const { className } = props;

    const { theme, toggleTheme } = useTheme();

    return (<Button
            variant={ButtonVariants.CLEAR}
            onClick={toggleTheme}
            className={classNames(cls.themeSwitcher, {}, [className])}
        >
            {theme === Theme.LIGHT ? <SunIcon/> : <MoonIcon/>}
        </Button>
    );
});