import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import {
    ArticleBlockType,
    ArticleView,
} from '../../../model/consts/articleConsts';
import { ArticleTextBlock } from '../../../model/types/Article';
import { ArticleTextBlockComponent } from '../../ArticleTextBlockComponent/ArticleTextBlockComponent';
import cls from '../ArticleListItem.module.scss';
import { articleListItemProps } from '../ArticleListItemProps/ArticleListItemProps';

import EyeIcon from '@/shared/assets/icons/solar--eye-outline.svg';
import { getRouteArticleDetails } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { ButtonDeprecated } from '@/shared/ui/deprecated/Button';
import { Card } from '@/shared/ui/deprecated/Card';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { Text } from '@/shared/ui/deprecated/Text';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { AppLink } from '@/shared/ui/redesigned/AppLink';


export const ArticleListItemDeprecated = memo((props: articleListItemProps) => {
    const { className, article, view, target } = props;

    const { t } = useTranslation();

    const articleTypes = (
        <Text text={article?.type?.join(', ')} className={cls.types} />
    );

    const views = (
        <div className={cls.views}>
            <Text text={String(article.views)} className={cls.views} />
            <EyeIcon className={cls.icon} />
        </div>
    );

    if (view === ArticleView.BIG) {
        const textBlock = article?.blocks?.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArticleTextBlock;

        return (
            <div
                data-testid={'ArticleListItem'}
                className={classNames(cls.articleListItem, {}, [
                    className,
                    cls[view],
                ])}
            >
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Avatar
                            size={30}
                            src={article.user.avatar}
                            className={cls.avatar}
                        />
                        <Text
                            text={article.user.username}
                            className={cls.username}
                        />
                        <Text text={article.createdAt} className={cls.date} />
                    </div>
                    <Text title={article.title} />
                    {articleTypes}
                    <AppImage
                        src={article.img}
                        alt={article.title}
                        className={cls.img}
                        fallback={<Skeleton width={'100%'} height={250} />}
                    />
                    {textBlock && (
                        <ArticleTextBlockComponent
                            block={textBlock}
                            className={cls.textBlock}
                        />
                    )}
                    <div className={cls.footer}>
                        <AppLink
                            to={getRouteArticleDetails(article.id)}
                            target={target}
                        >
                            <ButtonDeprecated
                            // onClick={onOpenArticle}
                            >
                                {t('Читать далее')}
                            </ButtonDeprecated>
                        </AppLink>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <AppLink
            data-testid={'ArticleListItem'}
            target={target}
            className={classNames(cls.articleListItem, {}, [
                className,
                cls[view],
            ])}
            // onClick={onOpenArticle}
            //{...bindHover}
            to={getRouteArticleDetails(article.id)}
        >
            <Card className={cls.card}>
                <div className={cls.imageWrapper}>
                    <AppImage
                        src={article.img}
                        alt={article.title}
                        className={cls.img}
                        fallback={<Skeleton width={200} height={200} />}
                    />
                    <Text text={article.createdAt} className={cls.date} />
                </div>
                <div className={cls.infoWrapper}>
                    {articleTypes}
                    {views}
                </div>
                <Text title={article.title} className={cls.title} />
            </Card>
        </AppLink>
    );
});
