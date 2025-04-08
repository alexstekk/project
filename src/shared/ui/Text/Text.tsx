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

export enum TextSize {
    M = 'sizeM',
    L = 'sizeL',
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    variant?: string;
    align?: TextAlign;
    size?: TextSize;
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        text = '',
        title = '',
        variant = TextVariants.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.M,
    } = props;

    return (
        <div className={classNames(cls.text, {}, [className, cls[variant], cls[align], cls[size]])}>
            {/*<Trans i18nKey={[title, text]}>*/}
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
            {/*</Trans>*/}
        </div>
    );
});