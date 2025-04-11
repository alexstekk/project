import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useNavigate, useParams } from 'react-router-dom';
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
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { Button } from 'shared/ui/Button';
import { AppRoutes, RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Page } from 'shared/ui/Page/Page';
import {
    articleDetailsRecommendationReducer,
    getArticleRecommendations
} from '../../model/slice/articleDetailsRecommendationSlice';
import { getArticleRecommendationsIsLoading } from '../../model/selectors/getRecommendationsData';
import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList';
import {
    fetchArticleRecommendations
} from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import { articleDetailsPageReducer } from 'pages/ArticleDetailsPage/model/slice';


interface articleDetailsPageProps {
    className?: string;
}

const reducer: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = (props: articleDetailsPageProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation('article-details');

    const { id } = useParams<{ id: string }>();

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const comments = useAppSelector(getArticleComments.selectAll);
    const recommendations = useAppSelector(getArticleRecommendations.selectAll);
    const commentIsLoading = useAppSelector(getArticleCommentsIsLoading);
    const recommendationsIsLoading = useAppSelector(getArticleRecommendationsIsLoading);
    const error = useAppSelector(getArticleCommentsError);

    const onSendComment = useCallback((value: string) => {
        dispatch(addCommentForArticle(value));
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
        dispatch(fetchArticleRecommendations());
    });

    const onBackToList = useCallback(() => {
        navigate(RoutePath[AppRoutes.ARTICLES]);
    }, [navigate]);

    if (!id && __PROJECT__ !== 'storybook') return (
        <div className={classNames(cls.articleDetailsPage, {}, [className])}>
            {t('Статья не найдена')}
        </div>
    );

    return (
        <DynamicModuleLoader reducers={reducer} removeAfterUnmount>
            <Page className={classNames(cls.articleDetailsPage, {}, [className])}>
                <Button
                    onClick={onBackToList}
                >
                    {t('Назад к списку')}
                </Button>
                <ArticleDetails id={id || '1'}/>
                <Text
                    className={cls.commentsTitle}
                    title={t('Рекомендуем')}
                    align={TextAlign.CENTER}
                />
                <Text
                    className={cls.commentsTitle}
                    title={t('Комментарии')}
                    align={TextAlign.CENTER}
                />
                <ArticleList
                    className={cls.recommendations}
                    articles={recommendations}
                    isLoading={recommendationsIsLoading}
                    target={'_blank'}
                />
                <AddCommentForm
                    onSendComment={onSendComment}
                />
                <CommentList
                    comments={comments}
                    isLoading={commentIsLoading}
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);