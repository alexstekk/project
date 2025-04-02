import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';
import { memo } from 'react';

export enum TextVariants {
    PRIMARY = 'primary',
    ERROR = 'error',
}

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center',
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    variant?: string;
    align?: TextAlign;
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        text,
        title,
        variant = TextVariants.PRIMARY,
        align = TextAlign.LEFT,
    } = props;

    return (
        <div className={classNames(cls.text, {}, [className, cls[variant], cls[align]])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
});