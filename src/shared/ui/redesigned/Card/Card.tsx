import { HTMLAttributes, ReactNode, memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Card.module.scss';

export type CardVariants = 'normal' | 'outline' | 'light';

export type CardPaddings = '0' | '8' | '16' | '24';
export type CardBorder = 'roundCorners' | 'normalCorners';

interface cardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: ReactNode;
    variant?: CardVariants;
    // withoutPaddings?: boolean;
    padding?: CardPaddings;
    corners?: CardBorder;
}

const mapPaddingToClass: Record<CardPaddings, string> = {
    '0': 'p0',
    '8': 'p8',
    '16': 'p16',
    '24': 'p24',
};

export const Card = memo((props: cardProps) => {
    const {
        className,
        children,
        variant = 'normal',
        // withoutPaddings,
        padding = '8',
        corners = 'normalCorners',
        ...otherProps
    } = props;

    const paddingClass = mapPaddingToClass[padding];

    return (
        <div
            className={classNames(cls.card, {}, [
                className,
                cls[variant],
                cls[paddingClass],
                cls[corners],
            ])}
            {...otherProps}
        >
            {children}
        </div>
    );
});
