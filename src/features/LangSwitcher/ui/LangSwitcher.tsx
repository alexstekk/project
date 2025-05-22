import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonVariants } from '@/shared/ui/deprecated/Button';


import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher = memo<LangSwitcherProps>(
    (props: LangSwitcherProps) => {
        const { className, short } = props;

        const { t, i18n } = useTranslation();

        const toggleLang = async () => {
            await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
        };

        return (
            <Button
                className={classNames(cls.langSwitcher, {}, [className])}
                onClick={toggleLang}
                variant={ButtonVariants.CLEAR}
            >
                {t(short ? 'Короткий язык' : 'Язык')}
            </Button>
        );
    },
);
