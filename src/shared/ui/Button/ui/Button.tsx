import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';
import { ButtonHTMLAttributes, FunctionComponent, memo, ReactNode, SVGProps } from 'react';

export enum ButtonVariants {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    OUTLINE_RED = 'outlineRed',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    M = 'sizeM',
    L = 'sizeL',
    XL = 'sizeXL',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: ButtonVariants;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        variant = ButtonVariants.OUTLINE,
        children,
        square,
        size = ButtonSize.M,
        disabled,
        ...otherProps
    } = props;

    const mods = {
        [cls.square]: square,
        [cls.disabled]: disabled,
    };

    return (
        <button
            type='button'
            disabled={disabled}
            className={classNames(cls.button, mods, [className, cls[variant], [cls[size]]])}
            {...otherProps}
        >
            {children}
        </button>
    );
});