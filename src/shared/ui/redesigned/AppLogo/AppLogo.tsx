import { memo } from 'react';

import { HStack } from '../Stack';

import AppLogoSvg from '@/shared/assets/icons/solar--airbuds-check.svg';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './AppLogo.module.scss';

interface appLogoProps {
    className?: string;
    size?: number;
}

export const AppLogo = memo((props: appLogoProps) => {
    const { className, size = 50 } = props;

    return (
        <HStack
            max
            justify="center"
            className={classNames(cls.appLogoWrapper, {}, [className])}
        >
            <AppLogoSvg width={size} height={size} />
            <div className={cls.gradientBig} />
            <div className={cls.gradientSmall} />
        </HStack>
    );
});
