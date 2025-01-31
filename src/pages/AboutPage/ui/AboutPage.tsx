import React from 'react';
import {useTranslation} from "react-i18next";

const AboutPage = () => {

    const { t } = useTranslation('about');

    return (
        <div>
            {t("О сайте")}
            {t("О сайте ТЕСТ ТЕСТ ТЕСТ ")}
            {t("О сайте УУУУУУУУУУУУУУУУУУ")}
        </div>
    );
};

export default AboutPage;