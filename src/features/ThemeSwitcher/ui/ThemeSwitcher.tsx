import { classNames } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import SunIcon from '@/shared/assets/icons/solar--sun-2-bold.svg';
import MoonIcon from '@/shared/assets/icons/solar--moon-bold.svg';
import { Button } from '@/shared/ui/Button';
import { ButtonVariants } from '@/shared/ui/Button';
import { memo } from 'react';
import cls from './ThemeSwitcher.module.scss';
import { Theme } from '@/shared/const/theme';

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