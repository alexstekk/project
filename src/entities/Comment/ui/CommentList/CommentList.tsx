import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CommentList.module.scss';
import { useTranslation } from 'react-i18next';
import { Comment } from 'entities/Comment';
import { Text } from 'shared/ui/Text/Text';
import { CommentCard } from '../CommentCard/CommentCard';


interface commentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentList = memo((props: commentListProps) => {
    const {
        className,
        comments = [],
        isLoading,
    } = props;

    const { t } = useTranslation();

    return (
        <div className={classNames(cls.commentList, {}, [className])}>
            {
                comments?.length > 0 ? (
                    comments.map((comment) => (
                        <
                            CommentCard
                            className={cls.comment}
                            key={comment.id}
                            comment={comment}
                            isLoading={isLoading}
                        />))
                ) : (
                    <Text
                        title={t('Комментарии отсутствуют')}
                    />
                )
            }
        </div>
    );
});