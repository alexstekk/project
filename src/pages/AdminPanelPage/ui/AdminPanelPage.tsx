import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/shared/ui/Page';

const AdminPanelPage = () => {

    const { t } = useTranslation('about');

    return (
        <Page>
            {t('Админ панель')}
        </Page>
    );
};

export default AdminPanelPage;