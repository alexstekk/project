import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';


interface articlePageProps {
    className?: string;
}

const ArticlesPage = (props: articlePageProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation();

    return (
        <div className={classNames(cls.articlePage, {}, [className])}>
            ARTICLES PAGE
        </div>
    );
};

export default memo(ArticlesPage);