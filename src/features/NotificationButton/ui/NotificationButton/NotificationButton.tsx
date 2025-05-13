import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NotificationButton.module.scss';
import { memo } from 'react';
import BellIcon from 'shared/assets/icons/solar--bell-outline.svg';
import { NotificationList } from 'entities/Notification';
import { PopoverComp } from 'shared/ui/Popover/Popover';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;

    return (
        <PopoverComp trigger={<BellIcon/>} anchorDirection={'bottom end'}
                     className={classNames(cls.NotificationButton, {}, [className])}>
            <NotificationList/>
        </PopoverComp>
    );
});