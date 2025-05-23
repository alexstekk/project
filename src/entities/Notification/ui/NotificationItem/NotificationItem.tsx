import { memo } from 'react';

import { Notification } from '../../model/types/notification';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import {
    Card as CardDeprecated,
    CardVariants,
} from '@/shared/ui/deprecated/Card';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Card } from '@/shared/ui/redesigned/Card';
import { Text } from '@/shared/ui/redesigned/Text';

import cls from './NotificationItem.module.scss';

interface notificationItemProps {
    className?: string;
    item: Notification;
}

export const NotificationItem = memo((props: notificationItemProps) => {
    const { className, item } = props;

    const content = (
        <Card
                            className={classNames(cls.notificationItem, {}, [
                                className,
                            ])}
                        >
                            <Text title={item.title} text={item.description} />
                        </Card>
    );

    if (item.href) {
        return (
            <a
                href={item.href}
                target={'_blank'}
                rel="noreferrer"
                className={cls.link}
            >
                {content}
            </a>
        );
    }

    return content;
});
