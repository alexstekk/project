import { memo, ReactNode } from 'react';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { useTheme } from '@/app/providers/ThemeProvider';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Popover.module.scss';
import { AnchorProps } from '@headlessui/react/dist/internal/floating';


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