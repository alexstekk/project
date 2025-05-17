import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { getArticleCommentsIsLoading } from '../../model/selectors/getCommentsData';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleComments } from '../../model/slice/articleDetailsCommentsSlice';

import { CommentList } from '@/entities/Comment';
import { AddCommentForm } from '@/features/addCommentForm';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    useAppDispatch,
    useAppSelector,
} from '@/shared/lib/hooks/redux/reduxTypedHooks';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Text, TextAlign } from '@/shared/ui/Text';


interface articleDetailsCommentsProps {
    className?: string;
    id?: string;
}

export const ArticleDetailsComments = memo(
    (props: articleDetailsCommentsProps) => {
        const { className, id } = props;

        const { t } = useTranslation();

        const dispatch = useAppDispatch();

        const comments = useAppSelector(getArticleComments.selectAll);
        const commentIsLoading = useAppSelector(getArticleCommentsIsLoading);
        const onSendComment = useCallback(
            (value: string) => {
                dispatch(addCommentForArticle(value));
            },
            [dispatch],
        );

        useInitialEffect(() => {
            dispatch(fetchCommentsByArticleId(id));
        });

        return (
            <div className={classNames('', {}, [className])}>
                <Text title={t('Комментарии')} align={TextAlign.CENTER} />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList comments={comments} isLoading={commentIsLoading} />
            </div>
        );
    },
);
