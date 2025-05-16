import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { getCanEditArticle } from '../../model/selectors/getArticleData';

import { getArticlesDetailsData } from '@/entities/Article';
import { getUserAuthData } from '@/entities/User';
import { AppRoutes, RoutePath } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppSelector } from '@/shared/lib/hooks/redux/reduxTypedHooks';
import { Button } from '@/shared/ui/Button';

import cls from './ArticleDetailsPageHeader.module.scss';


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