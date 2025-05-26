import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Text.module.scss';

export type TextVariants = 'primary' | 'error' | 'accent';

export type TextAlign = 'right' | 'left' | 'center';

type HeaderTagType = 'h1' | 'h2' | 'h3';

export type TextSize = 'sizeS' | 'sizeM' | 'sizeL';

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
    sizeS: 'h3',
    sizeM: 'h2',
    sizeL: 'h1',
};

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    variant?: TextVariants;
    align?: TextAlign;
    size?: TextSize;
    bold?: boolean;
    'data-testid'?: string;
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        text = '',
        title = '',
        variant = 'primary',
        align = 'left',
        size = 'sizeM',
        bold,
        'data-testid': dataTestId = '',
    } = props;

    const HeaderTag = mapSizeToHeaderTag[size];

    const additionalClasses = [className, cls[variant], cls[align], cls[size]];

    return (
        <div
            className={classNames(
                cls.text,
                { [cls.bold]: bold },
                additionalClasses,
            )}
        >
            {title && (
                <HeaderTag
                    className={cls.title}
                    data-testid={`${dataTestId}.Header`}
                >
                    {title}
                </HeaderTag>
            )}
            {text && (
                <p className={cls.text} data-testid={`${dataTestId}.Text`}>
                    {text}
                </p>
            )}
        </div>
    );
});
