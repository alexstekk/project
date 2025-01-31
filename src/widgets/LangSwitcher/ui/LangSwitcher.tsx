import {classNames} from "shared/lib/classNames/classNames";
import cls from './LangSwitcher.module.scss'
import {useTranslation} from "react-i18next";
import {Button} from "shared/ui/Button";
import {ButtonVariants} from "shared/ui/Button/ui/Button";

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = (props: LangSwitcherProps) => {
    const {className} = props;

    const {t, i18n} = useTranslation();

    const toggleLang = async  () => {
        await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    }

    return (
            <Button
                className={classNames(cls.langSwitcher, {}, [className])}
                onClick={toggleLang}
                variant={ButtonVariants.CLEAR}
            >
                {t("Язык")}
            </Button>
        );
};