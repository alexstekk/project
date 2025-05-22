import { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonVariants } from '@/shared/ui/deprecated/Button';
import { Card } from '@/shared/ui/deprecated/Card';
import { Drawer } from '@/shared/ui/deprecated/Drawer';
import { Input } from '@/shared/ui/deprecated/Input';
import { Modal } from '@/shared/ui/deprecated/Modal';
import { HStack, VStack } from '@/shared/ui/deprecated/Stack';
import { StarRating } from '@/shared/ui/deprecated/StarRating';
import { Text } from '@/shared/ui/deprecated/Text';


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

    const onSelectedStars = useCallback(
        (selectedStarsCount: number) => {
            setStarsCount(selectedStarsCount);
            if (hasFeedback) {
                setIsModalOpen(true);
            } else {
                onAccept?.(selectedStarsCount);
            }
        },
        [hasFeedback, onAccept],
    );

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
            <Text title={feedBackTitle} />
            <Input
                placeholder={t('Ваш отзыв')}
                value={feedback}
                onChange={setFeedback}
                data-testid={'RatingCard.Input'}
            />
        </>
    );

    return (
        <Card
            className={classNames('', {}, [className])}
            data-testid={'RatingCard'}
        >
            <VStack align={'center'} gap={'16'}>
                <Text title={starsCount ? t('Спасибо за оценку') : title} />
                <StarRating
                    selectedStars={starsCount}
                    size={40}
                    onSelect={onSelectedStars}
                />
            </VStack>

            <BrowserView renderWithFragment>
                <Modal isOpen={isModalOpen} lazy>
                    <VStack gap={'32'}>
                        {modalContent}
                        <HStack gap={'8'} max justify={'end'}>
                            <Button
                                data-testid={'RatingCard.Close'}
                                variant={ButtonVariants.OUTLINE_RED}
                                onClick={handleCancel}
                            >
                                {t('Закрыть')}
                            </Button>
                            <Button
                                data-testid={'RatingCard.Send'}
                                variant={ButtonVariants.OUTLINE}
                                onClick={handleAccept}
                            >
                                {t('Отправить')}
                            </Button>
                        </HStack>
                    </VStack>
                </Modal>
            </BrowserView>
            <MobileView renderWithFragment>
                <Drawer isOpen={isModalOpen} lazy onClose={handleCancel}>
                    <VStack gap={'32'}>
                        {modalContent}
                        <VStack max gap={'8'}>
                            <Button
                                fullWidth
                                variant={ButtonVariants.OUTLINE_RED}
                                onClick={handleCancel}
                            >
                                {t('Закрыть')}
                            </Button>
                            <Button
                                fullWidth
                                variant={ButtonVariants.OUTLINE}
                                onClick={handleAccept}
                            >
                                {t('Отправить')}
                            </Button>
                        </VStack>
                    </VStack>
                </Drawer>
            </MobileView>
        </Card>
    );
});
