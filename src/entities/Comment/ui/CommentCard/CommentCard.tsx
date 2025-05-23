import { memo } from 'react';


import { Comment } from '../../model/types/Comment';

import { getRouteProfile } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { Text } from '@/shared/ui/deprecated/Text';
import { AppLink } from '@/shared/ui/redesigned/AppLink';

import cls from './CommentCard.module.scss';

interface commentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentCard = memo((props: commentCardProps) => {
    const { className, comment, isLoading } = props;

    if (isLoading) {
        return (
            <div
                className={classNames(cls.commentCard, {}, [
                    className,
                    cls.loading,
                ])}
            >
                <div className={cls.header}>
                    <Skeleton
                        className={cls.avatar}
                        width={30}
                        height={30}
                        border={'50%'}
                    />
                    <Skeleton width={100} height={16} />
                </div>
                <Skeleton className={cls.text} width={'100%'} height={50} />
            </div>
        );
    }

    if (!comment) return null;

    return (
        <div
            className={classNames(cls.commentCard, {}, [className])}
            data-testid={'CommentCard.Content'}
        >
            <AppLink
                to={getRouteProfile(comment.user.id)}
                className={cls.header}
            >
                {comment.user.avatar && (
                    <Avatar size={30} src={comment.user.avatar} />
                )}
                <Text title={comment.user.username} />
            </AppLink>
            <Text className={cls.text} text={comment.text} />
        </div>
    );
});
