import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input/Input';
import { ButtonVariants } from 'shared/ui/Button/ui/Button';
import { Profile } from '../../model/types/Profile';


interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        //isLoading,
        // error
    } = props;


    const { t } = useTranslation('profile');

    return (
        <div className={classNames(cls.profileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title={t('Профиль')}/>
                <Button
                    className={cls.editBtn}
                    variant={ButtonVariants.OUTLINE}
                >
                    {t('Редактировать')}
                </Button>
            </div>
            <div className={cls.data}>
                <Input
                    value={data?.first}
                    placeholder={t('Ваше имя')}
                    className={cls.input}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('Ваша фамилия')}
                    className={cls.input}
                />
            </div>

        </div>
    );
};