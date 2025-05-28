import { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import {
    ButtonDeprecated,
    ButtonVariants,
} from '@/shared/ui/deprecated/Button';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { StarRating as StarRatingDeprecated } from '@/shared/ui/deprecated/StarRating';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
import { Input } from '@/shared/ui/redesigned/Input';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { StarRating } from '@/shared/ui/redesigned/StarRating';
import { Text } from '@/shared/ui/redesigned/Text';

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
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                <>
                    <Text title={feedBackTitle} />
                    <Input
                        placeholder={t('Ваш отзыв')}
                        value={feedback}
                        onChange={setFeedback}
                        data-testid={'RatingCard.Input'}
                    />
                </>
            }
            off={
                <>
                    <Text title={feedBackTitle} />
                    <InputDeprecated
                        placeholder={t('Ваш отзыв')}
                        value={feedback}
                        onChange={setFeedback}
                        data-testid={'RatingCard.Input'}
                    />
                </>
            }
        />
    );

    const content = (
        <>
            <ToggleFeatures
                feature={'isAppRedesigned'}
                on={
                    <VStack align={'center'} gap={'16'}>
                        <Text
                            title={starsCount ? t('Спасибо за оценку') : title}
                        />
                        <StarRating
                            selectedStars={starsCount}
                            size={40}
                            onSelect={onSelectedStars}
                        />
                    </VStack>
                }
                off={
                    <VStack align={'center'} gap={'16'}>
                        <TextDeprecated
                            title={starsCount ? t('Спасибо за оценку') : title}
                        />
                        <StarRatingDeprecated
                            selectedStars={starsCount}
                            size={40}
                            onSelect={onSelectedStars}
                        />
                    </VStack>
                }
            />

            <BrowserView renderWithFragment>
                <Modal isOpen={isModalOpen} lazy>
                    <VStack gap={'32'}>
                        {modalContent}
                        <ToggleFeatures
                            feature={'isAppRedesigned'}
                            on={
                                <HStack gap={'8'} max justify={'end'}>
                                    <Button
                                        data-testid={'RatingCard.Close'}
                                        variant={'outline'}
                                        onClick={handleCancel}
                                    >
                                        {t('Закрыть')}
                                    </Button>
                                    <Button
                                        data-testid={'RatingCard.Send'}
                                        variant={'filled'}
                                        onClick={handleAccept}
                                    >
                                        {t('Отправить')}
                                    </Button>
                                </HStack>
                            }
                            off={
                                <HStack gap={'8'} max justify={'end'}>
                                    <ButtonDeprecated
                                        data-testid={'RatingCard.Close'}
                                        variant={ButtonVariants.OUTLINE_RED}
                                        onClick={handleCancel}
                                    >
                                        {t('Закрыть')}
                                    </ButtonDeprecated>
                                    <ButtonDeprecated
                                        data-testid={'RatingCard.Send'}
                                        variant={ButtonVariants.OUTLINE}
                                        onClick={handleAccept}
                                    >
                                        {t('Отправить')}
                                    </ButtonDeprecated>
                                </HStack>
                            }
                        />
                    </VStack>
                </Modal>
            </BrowserView>
            <MobileView renderWithFragment>
                <Drawer isOpen={isModalOpen} lazy onClose={handleCancel}>
                    <VStack gap={'32'}>
                        {modalContent}
                        <ToggleFeatures
                            feature={'isAppRedesigned'}
                            on={
                                <VStack gap={'8'} max justify={'end'}>
                                    <Button
                                        data-testid={'RatingCard.Close'}
                                        variant={'outline'}
                                        onClick={handleCancel}
                                    >
                                        {t('Закрыть')}
                                    </Button>
                                    <Button
                                        data-testid={'RatingCard.Send'}
                                        variant={'filled'}
                                        onClick={handleAccept}
                                    >
                                        {t('Отправить')}
                                    </Button>
                                </VStack>
                            }
                            off={
                                <VStack gap={'8'} max justify={'end'}>
                                    <ButtonDeprecated
                                        data-testid={'RatingCard.Close'}
                                        variant={ButtonVariants.OUTLINE_RED}
                                        onClick={handleCancel}
                                    >
                                        {t('Закрыть')}
                                    </ButtonDeprecated>
                                    <ButtonDeprecated
                                        data-testid={'RatingCard.Send'}
                                        variant={ButtonVariants.OUTLINE}
                                        onClick={handleAccept}
                                    >
                                        {t('Отправить')}
                                    </ButtonDeprecated>
                                </VStack>
                            }
                        />
                    </VStack>
                </Drawer>
            </MobileView>
        </>
    );

    return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                <Card
                    className={classNames('', {}, [className])}
                    data-testid={'RatingCard'}
                    padding={'24'}
                    max
                    corners={'roundCorners'}
                >
                    {content}
                </Card>
            }
            off={
                <CardDeprecated
                    className={classNames('', {}, [className])}
                    data-testid={'RatingCard'}
                >
                    {content}
                </CardDeprecated>
            }
        />
    );
});
