import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/shared/ui/deprecated/Page';


import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = (props: NotFoundPageProps) => {
    const { className } = props;

    const { t } = useTranslation();

    return (
        <Page
            className={classNames(cls.notFoundPage, {}, [className])}
            data-testid={'NotFoundPage'}
        >
            {t('Страница не найдена')}
        </Page>
    );
};
