import React from 'react';
import { useTranslation } from 'react-i18next';

import { Page } from '@/shared/ui/deprecated/Page';

const MainPage = () => {
    const { t } = useTranslation('main');

    return <Page data-testid={'MainPage'}>{t('Главная страница')}</Page>;
};

export default MainPage;
