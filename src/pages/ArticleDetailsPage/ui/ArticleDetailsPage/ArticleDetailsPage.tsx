import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';


interface articleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage = (props: articleDetailsPageProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation();

    return (
        <div className={classNames(cls.articleDetailsPage, {}, [className])}>
            ARTICLE DETAILS PAGE
        </div>
    );
};

export default memo(ArticleDetailsPage);