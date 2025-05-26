import { useTranslation } from 'react-i18next';

import {
    ProfileCardProps,
    validKeyboardKeys,
} from '../ProfileCardProps/ProfileCardProps';
import cls from '../ProfileCardRedesigned/ProfileCardRedesigned.module.scss';

import { CountrySelect } from '@/entities/Country';
import { CurrencySelect } from '@/entities/Currency';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Spinner } from '@/shared/ui/deprecated/Spinner';
import {
    Text as TextDeprecated,
    TextAlign,
    TextVariants,
} from '@/shared/ui/deprecated/Text';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

export const ProfileCardDeprecated = (props: ProfileCardProps) => {
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
            !/[0-9]/.test(event.key) &&
            !Object.values(validKeyboardKeys).some((v) => v === event.key)
        ) {
            event.preventDefault();
        }
    };

    if (error) {
        return (
            <div
                className={classNames(cls.profileCard, {}, [
                    className,
                    cls.error,
                ])}
            >
                <TextDeprecated
                    variant={TextVariants.ERROR}
                    title={t('Произошла ошибка при загрузке профиля')}
                    text={t('Попробуйте обновить страницу')}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    return (
        <VStack
            gap={'8'}
            max={true}
            justify={'center'}
            className={classNames(
                cls.profileCard,
                { [cls.editing]: !readonly },
                [className],
            )}
        >
            {data?.avatar && (
                <HStack className={cls.avatarWrapper} justify={'center'} max>
                    <AvatarDeprecated src={data?.avatar} alt="" />
                </HStack>
            )}

            <InputDeprecated
                value={data?.first}
                placeholder={t('Ваше имя')}
                className={cls.input}
                onChange={onChangeFirstname}
                readonly={readonly}
                data-testid={'ProfileCard.Firstname'}
            />
            <InputDeprecated
                value={data?.lastname}
                placeholder={t('Ваша фамилия')}
                className={cls.input}
                onChange={onChangeLastname}
                readonly={readonly}
                data-testid={'ProfileCard.Lastname'}
            />
            <InputDeprecated
                value={data?.age}
                placeholder={t('Ваш возраст')}
                className={cls.input}
                onChange={onChangeAge}
                readonly={readonly}
                onKeyDown={onKeyDown}
            />
            <InputDeprecated
                value={data?.city}
                placeholder={t('Ваш город')}
                className={cls.input}
                onChange={onChangeCity}
                readonly={readonly}
            />
            <InputDeprecated
                value={data?.username}
                placeholder={t('Имя пользователя')}
                className={cls.input}
                onChange={onChangeUsername}
                readonly={readonly}
            />
            <InputDeprecated
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
export const ProfileCardDeprecatedError = () => {
    const { t } = useTranslation('profile');

    return (
        <div className={classNames(cls.profileCard, {}, [cls.error])}>
            <Text
                variant="error"
                title={t('Произошла ошибка при загрузке профиля')}
                text={t('Попробуйте обновить страницу')}
                align={'center'}
            />
        </div>
    );
};
export const ProfileCardDeprecatedLoader = () => (
    <VStack max justify={'center'} align={'center'}>
        <Spinner />
    </VStack>
);
