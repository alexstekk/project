import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import {
    ButtonDeprecated,
    ButtonVariants,
} from '@/shared/ui/deprecated/Button';
import { Button } from '@/shared/ui/redesigned/Button';

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
            <ToggleFeatures
                feature={'isAppRedesigned'}
                off={
                    <ButtonDeprecated
                        className={classNames(cls.langSwitcher, {}, [
                            className,
                        ])}
                        onClick={toggleLang}
                        variant={ButtonVariants.CLEAR}
                    >
                        {t(short ? 'Короткий язык' : 'Язык')}
                    </ButtonDeprecated>
                }
                on={
                    <Button
                        className={classNames(cls.langSwitcherNew, {}, [
                            className,
                        ])}
                        onClick={toggleLang}
                        variant="clear"
                    >
                        {t(short ? 'Короткий язык' : 'Язык')}
                    </Button>
                }
            />
        );
    },
);
