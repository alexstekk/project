import { memo, useCallback } from 'react';

import { ButtonDeprecated } from '../Button';
import { ButtonVariants } from '../Button/ui/Button';

import CopyIcon from '@/shared/assets/icons/solar--copy-outline.svg';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Code.module.scss';

interface codeProps {
    className?: string;
    text: string;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Code = memo((props: codeProps) => {
    const { className, text } = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames(cls.code, {}, [className])}>
            <ButtonDeprecated
                className={cls.copyBtn}
                variant={ButtonVariants.CLEAR}
                onClick={onCopy}
            >
                <CopyIcon />
            </ButtonDeprecated>
            <code>{text}</code>
        </pre>
    );
});
