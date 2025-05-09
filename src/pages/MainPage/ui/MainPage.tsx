import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/Page/Page';

const MainPage = () => {

    const { t } = useTranslation('main');

    return (
        <Page>
            {t('Главная страница')}
            <div>
                test
            </div>
        </Page>
    );
};

export default MainPage;