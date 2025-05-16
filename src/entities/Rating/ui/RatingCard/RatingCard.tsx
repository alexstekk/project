import { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button , ButtonVariants } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';
import { Drawer } from '@/shared/ui/Drawer';
import { Input } from '@/shared/ui/Input';
import { Modal } from '@/shared/ui/Modal';
import { HStack, VStack } from '@/shared/ui/Stack';
import { StarRating } from '@/shared/ui/StarRating';
import { Text } from '@/shared/ui/Text';

import cls from './RatingCard.module.scss';



interface ratingCardProps {
    className?: string;
    title?: string;
    feedBackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedback?: string) => void;
    rate?: number;
}

export const RatingCard = memo((props: ratingCardProps) => {
    const {
        className,
        onCancel,
        feedBackTitle,
        title,
        onAccept,
        hasFeedback,
        rate = 0,
    } = props;

    const { t } = useTranslation();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(rate);
    const [feedback, setFeedback] = useState('');

    const onSelectedStars = useCallback((selectedStarsCount: number) => {
        setStarsCount(selectedStarsCount);
        if (hasFeedback) {
            setIsModalOpen(true);
        } else {
            onAccept?.(selectedStarsCount);
        }
    }, [hasFeedback, onAccept]);

    const handleAccept = useCallback(() => {
        setIsModalOpen(false);
        onAccept?.(starsCount, feedback);
    }, [feedback, onAccept, starsCount]);

    const handleCancel = useCallback(() => {
        setIsModalOpen(false);
        onCancel?.(starsCount);
    }, [onCancel, starsCount]);

    const modalContent = (
        <>
            <Text title={feedBackTitle}/>
            <Input placeholder={t('Ваш отзыв')} value={feedback} onChange={setFeedback}/>
        </>
    );

    return (
        <Card className={classNames(cls.ratingCard, {}, [className])}>
            <VStack align={'center'} gap={'16'}>
                <Text title={starsCount ? t('Спасибо за оценку') : title}/>
                <StarRating selectedStars={starsCount} size={40} onSelect={onSelectedStars}/>
            </VStack>

            <BrowserView renderWithFragment>
                <Modal isOpen={isModalOpen} lazy>
                    <VStack gap={'32'}>
                        {modalContent}
                        <HStack gap={'8'} max justify={'end'}>
                            <Button variant={ButtonVariants.OUTLINE_RED} onClick={handleCancel}>{t('Закрыть')}</Button>
                            <Button variant={ButtonVariants.OUTLINE} onClick={handleAccept}>{t('Отправить')}</Button>
                        </HStack>
                    </VStack>
                </Modal>
            </BrowserView>
            <MobileView renderWithFragment>
                <Drawer isOpen={isModalOpen} lazy onClose={handleCancel}>
                    <VStack gap={'32'}>
                        {modalContent}
                        <VStack max gap={'8'}>
                            <Button fullWidth variant={ButtonVariants.OUTLINE_RED}
                                    onClick={handleCancel}>{t('Закрыть')}</Button>
                            <Button fullWidth variant={ButtonVariants.OUTLINE}
                                    onClick={handleAccept}>{t('Отправить')}</Button>
                        </VStack>
                    </VStack>
                </Drawer>
            </MobileView>
        </Card>
    );
});