import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPageHeader.module.scss';
import { useTranslation } from 'react-i18next';
import { AppRoutes, RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Button } from 'shared/ui/Button';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from 'shared/lib/hooks/redux/reduxTypedHooks';
import { getUserAuthData } from 'entities/User';
import { getArticlesDetailsData } from 'entities/Article';
import { getCanEditArticle } from 'pages/ArticleDetailsPage/model/selectors/getArticleData';


interface articleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader = memo((props: articleDetailsPageHeaderProps) => {
    const {
        className,
    } = props;

    const navigate = useNavigate();
    const { t } = useTranslation();

    const userData = useAppSelector(getUserAuthData);
    const article = useAppSelector(getArticlesDetailsData);
    const canEdit = useAppSelector(getCanEditArticle);

    const onBackToList = useCallback(() => {
        navigate(RoutePath[AppRoutes.ARTICLES]);
    }, [navigate]);

    const onEditArticle = useCallback(() => {
        navigate(RoutePath[AppRoutes.ARTICLES] + '/' + article?.id + '/edit');
    }, [article?.id, navigate]);


    return (
        <div className={classNames(cls.articleDetailsPageHeader, {}, [className])}>
            <Button
                onClick={onBackToList}
            >
                {t('Назад к списку')}
            </Button>
            {
                canEdit && (
                    <Button
                        onClick={onEditArticle}
                        className={cls.editBtn}
                    >
                        {t('Редактировать')}
                    </Button>
                )
            }

        </div>
    );
});