import React from 'react';
import { useTranslation } from 'react-i18next';

import { Counter } from '@/entities/Counter';
import { Page } from '@/shared/ui/Page';

const MainPage = () => {

    const { t } = useTranslation('main');

    return (
        <Page data-testid={'MainPage'}>
            <Counter/>
            {t('Главная страница')}
        </Page>
    );
};

export default MainPage;