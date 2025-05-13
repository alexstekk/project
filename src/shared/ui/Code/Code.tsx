import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Code.module.scss';
import { Button } from '@/shared/ui/Button';
import CopyIcon from '@/shared/assets/icons/solar--copy-outline.svg';
import { ButtonVariants } from '@/shared/ui/Button/ui/Button';


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