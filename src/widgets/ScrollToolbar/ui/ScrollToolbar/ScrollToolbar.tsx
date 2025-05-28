import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ScrollToTopButton } from '@/features/scrollToTopButton';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/redesigned/Stack';

import cls from './ScrollToolbar.module.scss';

interface scrollToolbarProps {
    className?: string;
}

export const ScrollToolbar = memo((props: scrollToolbarProps) => {
    const { className } = props;

    const { t } = useTranslation();

    return (
        <VStack
            className={classNames(cls.scrollToolbar, {}, [className])}
            align={'center'}
            max
            justify={'center'}
        >
            <ScrollToTopButton />
        </VStack>
    );
});
