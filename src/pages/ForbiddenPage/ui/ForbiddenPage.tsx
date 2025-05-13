import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ForbiddenPage.module.scss';
import { useTranslation } from 'react-i18next';
import { Page } from '@/shared/ui/Page/Page';

interface NotFoundPageProps {
    className?: string;
}

export const ForbiddenPage = (props: NotFoundPageProps) => {
    const { className } = props;

    const { t } = useTranslation();

    return (
        <Page className={classNames(cls.notFoundPage, {}, [className])}>
            {t('У вас нет доступа к этой странице')}
        </Page>
    );
};