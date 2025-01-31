import React from 'react';
import {useTranslation} from "react-i18next";

const MainPage = () => {

    const {t} = useTranslation('main');

    return (
        <div>
            {t("Главная страница")}
            <p>hello12555sdd</p>
        </div>
    );
};

export default MainPage;