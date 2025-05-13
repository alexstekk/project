import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NotificationItem.module.scss';
import { Notification } from '../../model/types/notification';
import { Card, CardVariants } from 'shared/ui/Card/Card';
import { Text } from 'shared/ui/Text/Text';


interface notificationItemProps {
    className?: string;
    item: Notification;
}

export const NotificationItem = memo((props: notificationItemProps) => {
    const {
        className,
        item,
    } = props;

    const content = (
        <Card
            className={classNames(cls.notificationItem, {}, [className])}
            variant={CardVariants.OUTLINE}
        >
            <Text title={item.title} text={item.description}/>
        </Card>
    );

    if (item.href) {
        return (
            <a href={item.href} target={'_blank'} rel="noreferrer" className={cls.link}>{content}</a>
        );
    }

    return content;
});