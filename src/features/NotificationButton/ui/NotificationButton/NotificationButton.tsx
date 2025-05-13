import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NotificationButton.module.scss';
import { memo, useCallback, useState } from 'react';
import BellIcon from 'shared/assets/icons/solar--bell-outline.svg';
import { NotificationList } from 'entities/Notification';
import { PopoverComp } from 'shared/ui/Popover/Popover';
import { Drawer } from 'shared/ui/Drawer/Drawer';
import { BrowserView, MobileView } from 'react-device-detect';
import { Button } from 'shared/ui/Button';
import { ButtonVariants } from 'shared/ui/Button/ui/Button';
import { AnimationProvider } from 'shared/lib/components/AnimationProvider';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;

    const [isOpen, setIsOpen] = useState(false);

    const onOpenDrawer = useCallback(() => {
        setIsOpen(true);
    }, []);

    const onCloseDrawer = useCallback(() => {
        setIsOpen(false);
    }, []);

    const trigger = (
        <BellIcon/>
    );

    return (
        <div>
            <BrowserView renderWithFragment>
                <PopoverComp trigger={trigger} anchorDirection={'bottom end'}
                             className={classNames(cls.NotificationButton, {}, [className])}>
                    <NotificationList/>
                </PopoverComp>
            </BrowserView>
            <MobileView renderWithFragment>
                <Button
                    variant={ButtonVariants.CLEAR_INVERTED}
                    onClick={onOpenDrawer}
                >
                    {trigger}
                </Button>
                <AnimationProvider>
                    <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                        <NotificationList/>
                    </Drawer>
                </AnimationProvider>
            </MobileView>
        </div>
    );
});