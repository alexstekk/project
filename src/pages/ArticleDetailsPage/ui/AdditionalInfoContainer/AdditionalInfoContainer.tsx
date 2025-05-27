import { a } from '@react-spring/web';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { getArticlesDetailsData } from '@/entities/Article';
import { getRouteArticleEdit } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppSelector } from '@/shared/lib/hooks/redux/reduxTypedHooks';
import { Card } from '@/shared/ui/redesigned/Card';
import { ArticleAdditionalInfo } from '@/widgets/ArticleAdditionalInfo';

import cls from './AdditionalInfoContainer.module.scss';

interface additionalInfoContainerProps {
    className?: string;
}

export const AdditionalInfoContainer = memo(
    (props: additionalInfoContainerProps) => {
        const { className } = props;

        const article = useAppSelector(getArticlesDetailsData);

        const navigate = useNavigate();
        const onEditArticle = useCallback(() => {
            navigate(getRouteArticleEdit(article?.id || '1'));
        }, [article?.id, navigate]);

        if (!article) {
            return null;
        }

        return (
            <Card className={cls.card} padding={'24'} corners={'roundCorners'}>
                <ArticleAdditionalInfo
                    author={article.user}
                    createdAt={article.createdAt}
                    views={article.views}
                    onEditArticle={onEditArticle}
                />
            </Card>
        );
    },
);
