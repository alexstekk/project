import { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';

import { NotificationList } from '@/entities/Notification';
import BellIcon from '@/shared/assets/icons/solar--bell-outline.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AnimationProvider } from '@/shared/lib/components/AnimationProvider';
import { Button, ButtonVariants } from '@/shared/ui/Button';
import { Drawer } from '@/shared/ui/Drawer';
import { PopoverComp } from '@/shared/ui/Popover';

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

    const trigger = <BellIcon />;

    return (
        <div>
            <BrowserView renderWithFragment>
                <PopoverComp
                    trigger={trigger}
                    anchorDirection={'bottom end'}
                    className={classNames('', {}, [className])}
                >
                    <NotificationList />
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
                        <NotificationList />
                    </Drawer>
                </AnimationProvider>
            </MobileView>
        </div>
    );
});
