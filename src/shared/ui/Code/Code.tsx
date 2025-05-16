import { memo, useCallback } from 'react';

import { Button } from '../Button';
import { ButtonVariants } from '../Button/ui/Button';

import CopyIcon from '@/shared/assets/icons/solar--copy-outline.svg';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Code.module.scss';



interface codeProps {
    className?: string;
    text: string;
}

export const Code = memo((props: codeProps) => {
    const {
        className,
        text,
    } = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames(cls.code, {}, [className])}>
            <Button
                className={cls.copyBtn}
                variant={ButtonVariants.CLEAR}
                onClick={onCopy}
            >
                <CopyIcon/>
            </Button>
            <code>
                {text}
             </code>
        </pre>
    );
});