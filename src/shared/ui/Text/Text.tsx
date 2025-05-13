import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Text.module.scss';
import { memo } from 'react';

export enum TextVariants {
    PRIMARY = 'primary',
    ERROR = 'error',
    INVERTED = 'inverted',
}

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center',
}

type HeaderTagType = 'h1' | 'h2' | 'h3';

export enum TextSize {
    S = 'sizeS',
    M = 'sizeM',
    L = 'sizeL',
}

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
    [TextSize.S]: 'h3',
    [TextSize.M]: 'h2',
    [TextSize.L]: 'h1',
};

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    variant?: string;
    align?: TextAlign;
    size?: TextSize;
    'data-testid'?: string;
}


export const Text = memo((props: TextProps) => {
    const {
        className,
        text = '',
        title = '',
        variant = TextVariants.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.M,
        'data-testid': dataTestId = '',
    } = props;

    const HeaderTag = mapSizeToHeaderTag[size];

    return (
        <div className={classNames(cls.text, {}, [className, cls[variant], cls[align], cls[size]])}>
            {/*<Trans i18nKey={[title, text]}>*/}
            {title && <HeaderTag className={cls.title} data-testid={`${dataTestId}.Header`}>{title}</HeaderTag>}
            {text && <p className={cls.text} data-testid={`${dataTestId}.Text`}>{text}</p>}
            {/*</Trans>*/}
        </div>
    );
});