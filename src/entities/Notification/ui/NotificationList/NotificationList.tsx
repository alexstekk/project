import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NotificationList.module.scss';
import { useGetNotificationsQuery } from '../../api/notificationApi';
import { VStack } from '@/shared/ui/Stack';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import { Skeleton } from '@/shared/ui/Skeleton';


interface notificationListProps {
    className?: string;
}

export const NotificationList = memo((props: notificationListProps) => {
    const {
        className,
    } = props;

    const { data, isLoading } = useGetNotificationsQuery(null, {
        pollingInterval: 5000,
    });

    if (isLoading) {
        return (
            <VStack
                className={classNames(cls.notificationList, {}, [className])}
                gap={'16'}
                max={true}
            >
                <Skeleton width={'100%'} border={'8px'} height={'80px'}/>
                <Skeleton width={'100%'} border={'8px'} height={'80px'}/>
                <Skeleton width={'100%'} border={'8px'} height={'80px'}/>
            </VStack>
        );
    }

    return (
        <VStack
            className={classNames(cls.notificationList, {}, [className])}
            gap={'16'}
            max={true}
        >
            {data?.map(item => (
                <NotificationItem
                    key={item.id}
                    item={item}
                />
            ))}
        </VStack>
    );
});