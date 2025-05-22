import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/shared/ui/deprecated/Page';


import cls from './ForbiddenPage.module.scss';

interface NotFoundPageProps {
    className?: string;
}

export const ForbiddenPage = (props: NotFoundPageProps) => {
    const { className } = props;

    const { t } = useTranslation();

    return (
        <Page
            className={classNames(cls.notFoundPage, {}, [className])}
            data-testid={'ForbiddenPage'}
        >
            {t('У вас нет доступа к этой странице')}
        </Page>
    );
};
