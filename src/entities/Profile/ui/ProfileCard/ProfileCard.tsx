import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextVariants } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Profile } from '../../model/types/Profile';
import { PageLoader } from 'widgets/PageLoader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';

import { Country } from 'entities/Country/model/types/country';
import { CountrySelect } from 'entities/Country';
import { VStack } from 'shared/ui/Stack';
import { HStack } from 'shared/ui/Stack';


interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    onChangeFirstname?: (value?: string) => void;
    onChangeLastname?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeCurrency?: (value: Currency) => void;
    onChangeCountry?: (value: Country) => void;

}

export enum validKeyboardKeys {
    BACKSPACE = 'Backspace',
    ARROWRIGHT = 'ArrowRight',
    ARROWLEFT = 'ArrowLeft',
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        isLoading,
        error,
        readonly,
        onChangeFirstname,
        onChangeLastname,
        onChangeCity,
        onChangeAge,
        onChangeAvatar,
        onChangeUsername,
        onChangeCurrency,
        onChangeCountry,
    } = props;


    const { t } = useTranslation('profile');

    const onKeyDown = (event: React.KeyboardEvent) => {
        if (
            !/[0-9]/.test(event.key)
            && !(Object.values(validKeyboardKeys).some((v) => v === event.key))
        ) {
            event.preventDefault();
        }
    };


    if (isLoading) {
        return (
            <VStack max justify={'center'} align={'center'}
                    className={classNames(cls.profileCard, {}, [className, cls.loading])}>
                <PageLoader/>
            </VStack>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.profileCard, {}, [className, cls.error])}>
                <Text
                    variant={TextVariants.ERROR}
                    title={t('Произошла ошибка при загрузке профиля')}
                    text={t('Попробуйте обновить страницу')}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }


    return (
        <VStack gap={'8'} max={true} justify={'center'}
                className={classNames(cls.profileCard, { [cls.editing]: !readonly }, [className])}>
            {
                data?.avatar && (
                    <HStack className={cls.avatarWrapper} justify={'center'} max>
                        <Avatar src={data?.avatar} alt=""/>
                    </HStack>
                )}

            <Input
                value={data?.first}
                placeholder={t('Ваше имя')}
                className={cls.input}
                onChange={onChangeFirstname}
                readonly={readonly}
                data-testid={'ProfileCard.Firstname'}
            />
            <Input
                value={data?.lastname}
                placeholder={t('Ваша фамилия')}
                className={cls.input}
                onChange={onChangeLastname}
                readonly={readonly}
                data-testid={'ProfileCard.Lastname'}
            />
            <Input
                value={data?.age}
                placeholder={t('Ваш возраст')}
                className={cls.input}
                onChange={onChangeAge}
                readonly={readonly}
                onKeyDown={onKeyDown}
            />
            <Input
                value={data?.city}
                placeholder={t('Ваш город')}
                className={cls.input}
                onChange={onChangeCity}
                readonly={readonly}

            />
            <Input
                value={data?.username}
                placeholder={t('Имя пользователя')}
                className={cls.input}
                onChange={onChangeUsername}
                readonly={readonly}

            />
            <Input
                value={data?.avatar}
                placeholder={t('Введите ссылку на аватар')}
                className={cls.input}
                onChange={onChangeAvatar}
                readonly={readonly}
            />
            <CurrencySelect
                className={cls.input}
                value={data?.currency}
                onChange={onChangeCurrency}
                readonly={readonly}
            />
            <CountrySelect
                className={cls.input}
                value={data?.country}
                onChange={onChangeCountry}
                readonly={readonly}
            />
        </VStack>
    );
};