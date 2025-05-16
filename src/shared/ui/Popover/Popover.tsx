import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import type { AnchorProps } from '@headlessui/react/dist/internal/floating';
import { memo, ReactNode } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

import cls from './Popover.module.scss';


interface popoverProps {
    className?: string;
    trigger?: ReactNode;
    children?: ReactNode;
    anchorDirection?: AnchorProps;
}

export const PopoverComp = memo((props: popoverProps) => {
    const {
        className,
        trigger,
        children,
        anchorDirection,
    } = props;

    const { theme } = useTheme();

    return (
        <Popover className={classNames(cls.relative, {}, [theme, className])}>
            <PopoverButton className={cls.trigger}>
                {trigger}
            </PopoverButton>
            <PopoverPanel anchor={anchorDirection}
                          className={classNames(cls.popoverPanel, {}, [theme])}>
                {children}
            </PopoverPanel>
        </Popover>
    );
});