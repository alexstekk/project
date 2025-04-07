import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsCommentsReducer, getArticleComments } from '../../model/slice/articleDetailsCommentsSlice';
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/redux/reduxTypedHooks';
import {
    getArticleCommentsError,
    getArticleCommentsIsLoading
} from '../../model/selectors/getCommentsData';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import {
    fetchCommentsByArticleId
} from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import AddCommentForm from 'features/addCommentForm/ui/AddCommentForm/AddCommentForm';
import { addCommentForArticle } from 'pages/ArticleDetailsPage/model/services/addCommentForArticle/addCommentForArticle';


interface articleDetailsPageProps {
    className?: string;
}

const reducer: ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage = (props: articleDetailsPageProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation('article-details');

    const { id } = useParams<{ id: string }>();

    const dispatch = useAppDispatch();

    const comments = useAppSelector(getArticleComments.selectAll);
    const commentIsLoading = useAppSelector(getArticleCommentsIsLoading);
    const error = useAppSelector(getArticleCommentsError);

    const onSendComment = useCallback((value: string) => {
        dispatch(addCommentForArticle(value));
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    if (!id && __PROJECT__ !== 'storybook') return (
        <div className={classNames(cls.articleDetailsPage, {}, [className])}>
            {t('Статья не найдена')}
        </div>
    );

    return (
        <DynamicModuleLoader reducers={reducer} removeAfterUnmount>
            <div className={classNames(cls.articleDetailsPage, {}, [className])}>
                <ArticleDetails id={id || '1'}/>
                <Text
                    className={cls.commentsTitle}
                    title={t('Комментарии')}
                    align={TextAlign.CENTER}
                />
                <AddCommentForm
                    onSendComment={onSendComment}
                />
                <CommentList
                    comments={comments}
                    isLoading={commentIsLoading}
                />
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);