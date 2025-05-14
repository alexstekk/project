import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/shared/ui/Page/Page';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { RatingCard } from '@/entities/Rating';

const MainPage = () => {

    const { t } = useTranslation('main');

    return (
        <Page>
            {t('Главная страница')}
            <div>
                test
            </div>
            <RatingCard title={'Оцените статью'} feedBackTitle={'Оставьте отзыв о статье'} hasFeedback/>
        </Page>
    );
};

export default MainPage;