import { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';

import { NotificationList } from '@/entities/Notification';
import NotificationIcon from '@/shared/assets/icons/notification.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AnimationProvider } from '@/shared/lib/components/AnimationProvider';
import {
    ButtonDeprecated,
    ButtonVariants,
} from '@/shared/ui/deprecated/Button';
import { Drawer as DrawerDeprecated } from '@/shared/ui/deprecated/Drawer';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { PopoverComp } from '@/shared/ui/redesigned/Popover';

import cls from './NotificationButton.module.scss';

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
        <Icon
            Svg={
                <NotificationIcon width={32} height={32} className={cls.icon} />
            }
            clickable
            onClick={onOpenDrawer}
        />
    );

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
                <>
                    <ButtonDeprecated
                        variant={ButtonVariants.CLEAR_INVERTED}
                        onClick={onOpenDrawer}
                    >
                        {trigger}
                    </ButtonDeprecated>
                    <AnimationProvider>
                        <DrawerDeprecated
                            isOpen={isOpen}
                            onClose={onCloseDrawer}
                        >
                            <NotificationList />
                        </DrawerDeprecated>
                    </AnimationProvider>
                </>
            </MobileView>
        </div>
    );
});
