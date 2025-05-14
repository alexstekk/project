import { memo, useCallback, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './RatingCard.module.scss';
import { useTranslation } from 'react-i18next';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Card } from '@/shared/ui/Card/Card';
import { Text } from '@/shared/ui/Text/Text';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { Modal } from '@/shared/ui/Modal/Modal';
import { Input } from '@/shared/ui/Input/Input';
import { Button } from '@/shared/ui/Button';
import { ButtonVariants } from '@/shared/ui/Button/ui/Button';
import { BrowserView, MobileView } from 'react-device-detect';
import { Drawer } from '@/shared/ui/Drawer/Drawer';


interface ratingCardProps {
    className?: string;
    title?: string;
    feedBackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedback?: string) => void;
}

export const RatingCard = memo((props: ratingCardProps) => {
    const {
        className,
        onCancel,
        feedBackTitle,
        title,
        onAccept,
        hasFeedback,
    } = props;

    const { t } = useTranslation();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(0);
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
            <Input placeholder={t('Ваш отзыв')}/>
        </>
    );

    return (
        <Card className={classNames(cls.ratingCard, {}, [className])}>
            <VStack align={'center'} gap={'16'}>
                <Text title={title}/>
                <StarRating size={40} onSelect={onSelectedStars}/>
            </VStack>

            <BrowserView renderWithFragment>
                <Modal isOpen={isModalOpen} lazy>
                    <VStack>
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