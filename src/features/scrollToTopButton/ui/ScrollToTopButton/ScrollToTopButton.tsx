import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import CircleIcon from '@/shared/assets/icons/circle-up.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Icon } from '@/shared/ui/redesigned/Icon';

import cls from './ScrollToTopButton.module.scss';

interface scrollToTopButtonProps {
    className?: string;
}

export const ScrollToTopButton = memo((props: scrollToTopButtonProps) => {
    const { className } = props;

    const { t } = useTranslation();

    const onClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Icon
            onClick={onClick}
            clickable
            Svg={<CircleIcon width={32} height={32} />}
            className={classNames(cls.scrollToTopButton, {}, [className])}
        />
    );
});
