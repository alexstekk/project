import { memo, useCallback } from 'react';

import { Button } from '../Button';
import { ButtonVariants } from '../Button/ui/Button';
import { Icon } from '../Icon';

import CopyIcon from '@/shared/assets/icons/copy.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';

import cls from './Code.module.scss';

interface codeProps {
    className?: string;
    text: string;
}

export const Code = memo((props: codeProps) => {
    const { className, text } = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames(cls.codeRedesigned, {}, [className])}>
            <Icon
                className={cls.copyBtn}
                clickable
                Svg={<CopyIcon width={32} height={32} />}
                onClick={onCopy}
            />
            <code>{text}</code>
        </pre>
    );
});
