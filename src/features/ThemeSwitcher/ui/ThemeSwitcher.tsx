import { memo, useCallback } from 'react';


import { saveJsonSettings } from '@/entities/User';
import MoonIcon from '@/shared/assets/icons/solar--moon-bold.svg';
import SunIcon from '@/shared/assets/icons/solar--sun-2-bold.svg';
import { Theme } from '@/shared/const/theme';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/redux/reduxTypedHooks';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Button, ButtonVariants } from '@/shared/ui/deprecated/Button';

import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
    const { className } = props;

    const dispatch = useAppDispatch();

    const { theme, toggleTheme } = useTheme();

    const onToggleHandler = useCallback(() => {
        toggleTheme((newTheme) => {
            // console.log(newTheme);
            dispatch(saveJsonSettings({ theme: newTheme }));
        });
    }, [dispatch, toggleTheme]);

    return (
        <Button
            variant={ButtonVariants.CLEAR}
            onClick={onToggleHandler}
            className={classNames(cls.themeSwitcher, {}, [className])}
        >
            {theme === Theme.LIGHT ? <SunIcon /> : <MoonIcon />}
        </Button>
    );
});
