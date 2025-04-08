import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleListItem.module.scss';
import { useTranslation } from 'react-i18next';
import { Article, ArticleBlockType, ArticleTextBlock, ArticleView } from '../../model/types/Article';
import { Text } from 'shared/ui/Text/Text';
import EyeIcon from 'shared/assets/icons/solar--eye-outline.svg';
import { Card } from 'shared/ui/Card/Card';
import { useHover } from 'shared/lib/hooks/useHover/useHover';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button } from 'shared/ui/Button';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { useNavigate } from 'react-router-dom';
import { AppRoutes, RoutePath } from 'shared/config/routeConfig/routeConfig';


interface articleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
}

export const ArticleListItem = memo((props: articleListItemProps) => {
    const {
        className,
        article,
        view,
    } = props;

    const { t } = useTranslation();
    const navigate = useNavigate();

    // const [isHover, bindHover] = useHover();


    const onOpenArticle = useCallback(() => {
        navigate(RoutePath[AppRoutes.ARTICLE_DETAILS] + article.id);
    }, [article.id, navigate]);

    const articleTypes = (
        <Text
            text={article.type.join(', ')}
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

        const textBlock = article.blocks.find(block => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;

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
                        <Button
                            onClick={onOpenArticle}
                        >
                            {t('Читать далее')}
                        </Button>
                        {
                            views
                        }
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div
            className={classNames(cls.articleListItem, {}, [className, cls[view]])}
            //{...bindHover}
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
        </div>
    );
});