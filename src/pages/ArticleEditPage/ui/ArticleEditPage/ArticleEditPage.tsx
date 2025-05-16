import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleEditPage.module.scss';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Page } from '@/shared/ui/Page';


interface articleEditPageProps {
    className?: string;
}

const ArticleEditPage = (props: articleEditPageProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();
    const isEdit = Boolean(id);

    return (
        <Page className={classNames(cls.articleEditPage, {}, [className])}>
            {
                isEdit ? (
                    t('Редактирование статьи ') + id
                ) : (
                    t('Создание статьи')
                )
            }
        </Page>
    );
};

export default memo(ArticleEditPage);