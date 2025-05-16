import { HTMLAttributes, memo, ReactNode } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Card.module.scss';

export enum CardVariants {
    NORMAL = 'normal',
    OUTLINE = 'outline',
}

interface cardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: ReactNode;
    variant?: CardVariants;
}

export const Card = memo((props: cardProps) => {
    const {
        className,
        children,
        variant = CardVariants.NORMAL,
        ...otherProps
    } = props;

    // const { t } = useTranslation();

    return (
        <div
            className={classNames(cls.card, {}, [className, cls[variant]])}
            {...otherProps}
        >
            {children}
        </div>
    );
});