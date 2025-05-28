import { memo } from 'react';

import { Comment } from '../../model/types/Comment';

import { getRouteProfile } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
import { AppLink as AppLinkDeprecated } from '@/shared/ui/deprecated/AppLink';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

import cls from './CommentCard.module.scss';

interface commentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentCard = memo((props: commentCardProps) => {
    const { className, comment, isLoading } = props;

    const Skeleton = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => SkeletonRedesigned,
        off: () => SkeletonDeprecated,
    });

    if (isLoading) {
        return (
            <VStack
                className={classNames(cls.commentCardRedesigned, {}, [
                    className,
                    cls.loading,
                ])}
                max
                gap={'8'}
            >
                <HStack gap={'8'} className={cls.header}>
                    <Skeleton
                        className={cls.avatar}
                        width={30}
                        height={30}
                        border={'50%'}
                    />
                    <Skeleton width={100} height={16} />
                </HStack>
                <Skeleton className={cls.text} width={'100%'} height={50} />
            </VStack>
        );
    }

    if (!comment) return null;

    return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                <VStack
                    className={classNames(cls.commentCardRedesigned, {}, [])}
                    data-testid={'CommentCard.Content'}
                    max
                    gap={'8'}
                >
                    <AppLink
                        to={getRouteProfile(comment.user.id)}
                        className={cls.header}
                    >
                        <HStack gap={'8'}>
                            {comment.user.avatar && (
                                <Avatar size={30} src={comment.user.avatar} />
                            )}
                            <Text text={comment.user.username} bold />
                        </HStack>
                    </AppLink>
                    <Text className={cls.text} text={comment.text} />
                </VStack>
            }
            off={
                <VStack
                    className={classNames(cls.commentCard, {}, [className])}
                    data-testid={'CommentCard.Content'}
                    max
                >
                    <AppLinkDeprecated
                        to={getRouteProfile(comment.user.id)}
                        className={cls.header}
                    >
                        {comment.user.avatar && (
                            <AvatarDeprecated
                                size={30}
                                src={comment.user.avatar}
                            />
                        )}
                        <TextDeprecated title={comment.user.username} />
                    </AppLinkDeprecated>
                    <TextDeprecated className={cls.text} text={comment.text} />
                </VStack>
            }
        />
    );
});
