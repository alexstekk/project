import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleView, ArticleBlockType } from '../../model/consts/articleConsts';
import { Article, ArticleTextBlock } from '../../model/types/Article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

import EyeIcon from '@/shared/assets/icons/solar--eye-outline.svg';
import { AppRoutes, RoutePath } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/AppLink';
import { Avatar } from '@/shared/ui/Avatar';
import { Button } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';
import { Text } from '@/shared/ui/Text';

import cls from './ArticleListItem.module.scss';


interface articleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: articleListItemProps) => {
    const {
        className,
        article,
        view,
        target,
    } = props;

    const { t } = useTranslation();
    // const navigate = useNavigate();

    // const [isHover, bindHover] = useHover();
    //
    // const onOpenArticle = useCallback(() => {
    //     navigate();
    // }, [article.id, navigate]);

    const articleTypes = (
        <Text
            text={article?.type?.join(', ')}
            className={cls.types}
        />
    );

    const views = (
        <div
            className={cls.views}
        >
            <Text
                text={String(article.views)}
                className={cls.views}
            />
            <EyeIcon
                className={cls.icon}
            />
        </div>
    );

    if (view === ArticleView.BIG) {

        const textBlock = article?.blocks?.find(block => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;

        return (
            <div className={classNames(cls.articleListItem, {}, [className, cls[view]])}>
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Avatar size={30} src={article.user.avatar} className={cls.avatar}/>
                        <Text text={article.user.username} className={cls.username}/>
                        <Text text={article.createdAt} className={cls.date}/>
                    </div>
                    <Text
                        title={article.title}
                    />
                    {articleTypes}
                    <img src={article.img} alt={article.title} className={cls.img}/>
                    {textBlock && (<ArticleTextBlockComponent block={textBlock} className={cls.textBlock}/>)}
                    <div
                        className={cls.footer}
                    >
                        <AppLink to={RoutePath[AppRoutes.ARTICLE_DETAILS] + article.id} target={target}
                        >
                            <Button
                                // onClick={onOpenArticle}
                            >
                                {t('Читать далее')}
                            </Button>
                        </AppLink>
                        {
                            views
                        }

                    </div>
                </Card>
            </div>
        );
    }

    return (
        <AppLink
            target={target}
            className={classNames(cls.articleListItem, {}, [className, cls[view]])}
            // onClick={onOpenArticle}
            //{...bindHover}
            to={RoutePath[AppRoutes.ARTICLE_DETAILS] + article.id}
        >
            <Card className={cls.card}>
                <div className={cls.imageWrapper}>
                    <img
                        src={article.img}
                        alt={article.title}
                        className={cls.img}
                    />
                    <Text
                        text={article.createdAt}
                        className={cls.date}
                    />
                </div>
                <div className={cls.infoWrapper}>
                    {articleTypes}
                    {views}
                </div>
                <Text title={article.title} className={cls.title}/>
            </Card>
        </AppLink>
    );
});