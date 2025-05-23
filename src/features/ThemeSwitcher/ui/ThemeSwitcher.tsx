import { memo, useCallback } from 'react';

import { saveJsonSettings } from '@/entities/User';
import MoonIconDeprecated from '@/shared/assets/icons/solar--moon-bold.svg';
import SunIconDeprecated from '@/shared/assets/icons/solar--sun-2-bold.svg';
import ThemeIcon from '@/shared/assets/icons/theme.svg';
import { Theme } from '@/shared/const/theme';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/redux/reduxTypedHooks';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import {
    ButtonDeprecated,
    ButtonVariants,
} from '@/shared/ui/deprecated/Button';
import { Button } from '@/shared/ui/redesigned/Button';
import { Icon } from '@/shared/ui/redesigned/Icon';

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
                            variant="clear"
                            onClick={onToggleHandler}
                            className={classNames(cls.themeSwitcher, {}, [className])}
                        >
                            <Icon
                                Svg={<ThemeIcon height={32} width={32} />}
                                height={32}
                                width={32}
                            />
                        </Button>
    );
});
