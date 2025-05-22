import React from 'react';
import { useTranslation } from 'react-i18next';

import { Page } from '@/shared/ui/deprecated/Page';

const AdminPanelPage = () => {
    const { t } = useTranslation('about');

    return <Page data-testid={'AdminPanelPage'}>{t('Админ панель')}</Page>;
};

export default AdminPanelPage;
