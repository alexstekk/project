import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Comment } from '../../model/types/Comment';
import { CommentCard } from '../CommentCard/CommentCard';

import { classNames } from '@/shared/lib/classNames/classNames';
import { toggleFeatures, ToggleFeatures } from '@/shared/lib/features';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

import cls from './CommentList.module.scss';

interface commentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentList = memo((props: commentListProps) => {
    const { className, comments = [], isLoading } = props;

    const { t } = useTranslation();

    if (isLoading) {
        return (
            <div className={classNames(cls.commentList, {}, [className])}>
                <CommentCard isLoading={true} />
                <CommentCard isLoading={true} />
                <CommentCard isLoading={true} />
            </div>
        );
    }

    return (
        <VStack
            className={classNames(
                toggleFeatures({
                    name: 'isAppRedesigned',
                    on: () => cls.commentListRedesigned,
                    off: () => cls.commentList,
                }),
                {},
                [className],
            )}
            gap={'32'}
            max
        >
            {comments?.length > 0 ? (
                comments.map((comment) => (
                    <CommentCard
                        className={cls.comment}
                        key={comment.id}
                        comment={comment}
                        isLoading={isLoading}
                    />
                ))
            ) : (
                <ToggleFeatures
                    feature={'isAppRedesigned'}
                    on={<Text title={t('Комментарии отсутствуют')} />}
                    off={
                        <TextDeprecated title={t('Комментарии отсутствуют')} />
                    }
                />
            )}
        </VStack>
    );
});
