import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {

    const { t } = useTranslation('about');

    return (
        <div style={{ background: 'red' }}>
            {t('О сайте')}11

        </div>
    );
};

export default AboutPage;