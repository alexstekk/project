import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/Page/Page';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';

const MainPage = () => {

    const { t } = useTranslation('main');

    return (
        <Page>
            {t('Главная страница')}
        </Page>
    );
};

export default MainPage;