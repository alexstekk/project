import { memo, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Popover.module.scss';
import { PopoverButton, PopoverPanel } from '@headlessui/react';
import { Button } from 'shared/ui/Button';
import { ButtonVariants } from 'shared/ui/Button/ui/Button';
import { useTheme } from 'app/providers/ThemeProvider';


interface popoverProps {
    className?: string;
    children?: ReactNode;
}

export const Popover = memo((props: popoverProps) => {
    const {
        className,
        children,
    } = props;

    const { theme } = useTheme();

    return (
        <Popover className={cls.relative}>
            <PopoverButton className={cls.button}>
                <Button
                    variant={ButtonVariants.CLEAR_INVERTED}
                >
                </Button>
            </PopoverButton>
            <PopoverPanel anchor="bottom"
                          className={classNames(cls.popover, {}, [cls.popover, theme, 'lalala'])}>
                <span>Analytics</span>
                <span>Engagement</span>
                <span>Security</span>
                <span>Integrations</span>
                {children}
            </PopoverPanel>
        </Popover>
    );
});