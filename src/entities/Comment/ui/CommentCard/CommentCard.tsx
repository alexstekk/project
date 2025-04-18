import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CommentCard.module.scss';
import { Comment } from '../../model/types/Comment';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { AppRoutes, RoutePath } from 'shared/config/routeConfig/routeConfig';


interface commentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentCard = memo((props: commentCardProps) => {
    const {
        className,
        comment,
        isLoading,
    } = props;

    if (isLoading) {
        return (
            <div className={classNames(cls.commentCard, {}, [className, cls.loading])}>
                <div className={cls.header}>
                    <Skeleton
                        className={cls.avatar}
                        width={30}
                        height={30}
                        border={'50%'}
                    />
                    <Skeleton
                        width={100}
                        height={16}
                    />
                </div>
                <Skeleton
                    className={cls.text}
                    width={'100%'}
                    height={50}
                />
            </div>
        );
    }

    if (!comment) return null;

    return (
        <div className={classNames(cls.commentCard, {}, [className])}>
            <AppLink to={`${RoutePath[AppRoutes.PROFILE]}${comment.user.id}`} className={cls.header}>
                {comment.user.avatar && <Avatar
                    size={30}
                    src={comment.user.avatar}
                />}
                <Text
                    title={comment.user.username}
                />
            </AppLink>
            <Text
                className={cls.text}
                text={comment.text}
            />
        </div>
    );
});