import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import {
    ProfileCardProps,
    validKeyboardKeys,
} from '../ProfileCardProps/ProfileCardProps';

import { CountrySelect } from '@/entities/Country';
import { CurrencySelect } from '@/entities/Currency';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    Text as TextDeprecated,
    TextAlign,
    TextVariants,
} from '@/shared/ui/deprecated/Text';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Card } from '@/shared/ui/redesigned/Card';
import { Input } from '@/shared/ui/redesigned/Input';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';

export const ProfileCardRedesigned = memo((props: ProfileCardProps) => {
    const {
        className,
        data,
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

    return (
        <Card
            className={classNames(
                cls.profileCardRedesigned,
                // { [cls.editing]: !readonly },
                {},
                [className],
            )}
            max
            padding={'24'}
        >
            <VStack gap={'32'}>
                {' '}
                {data?.avatar && (
                    <HStack
                        className={cls.avatarWrapper}
                        justify={'center'}
                        max
                    >
                        <Avatar src={data?.avatar} alt="" size={128} />
                    </HStack>
                )}
                <HStack
                    className={cls.avatarWrapper}
                    justify={'center'}
                    max
                    gap={'24'}
                >
                    <VStack gap={'16'} max>
                        <Input
                            value={data?.first}
                            label={t('Имя')}
                            className={cls.input}
                            onChange={onChangeFirstname}
                            readonly={readonly}
                            data-testid={'ProfileCard.Firstname'}
                        />
                        <Input
                            value={data?.lastname}
                            label={t('Фамилия')}
                            className={cls.input}
                            onChange={onChangeLastname}
                            readonly={readonly}
                            data-testid={'ProfileCard.Lastname'}
                        />
                        <Input
                            value={data?.age}
                            label={t('Возраст')}
                            className={cls.input}
                            onChange={onChangeAge}
                            readonly={readonly}
                            onKeyDown={onKeyDown}
                        />
                        <Input
                            value={data?.city}
                            label={t('Город')}
                            className={cls.input}
                            onChange={onChangeCity}
                            readonly={readonly}
                        />
                    </VStack>
                    <VStack gap={'16'} max>
                        <Input
                            value={data?.username}
                            label={t('Имя пользователя')}
                            className={cls.input}
                            onChange={onChangeUsername}
                            readonly={readonly}
                        />
                        <Input
                            value={data?.avatar}
                            label={t('Ссылка на аватар')}
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
                </HStack>
            </VStack>
        </Card>
    );
});
export const ProfileCardRedesignedLoader = () => (
    <Card max padding={'24'}>
        <VStack gap={'32'}>
            <HStack max align={'center'} justify={'center'}>
                <Skeleton width={128} height={128} border={'50%'} />
            </HStack>
            <HStack gap={'32'} max>
                <VStack gap={'16'} max>
                    <Skeleton width={'100%'} height={'38px'} />
                    <Skeleton width={'100%'} height={'38px'} />
                    <Skeleton width={'100%'} height={'38px'} />
                    <Skeleton width={'100%'} height={'38px'} />
                </VStack>
                <VStack gap={'16'} max>
                    <Skeleton width={'100%'} height={'38px'} />
                    <Skeleton width={'100%'} height={'38px'} />
                    <Skeleton width={'100%'} height={'38px'} />
                    <Skeleton width={'100%'} height={'38px'} />
                </VStack>
            </HStack>
        </VStack>
    </Card>
);
export const ProfileCardRedesignedError = () => {
    const { t } = useTranslation('profile');

    return (
        <div className={classNames(cls.profileCard, {}, [cls.error])}>
            <TextDeprecated
                variant={TextVariants.ERROR}
                title={t('Произошла ошибка при загрузке профиля')}
                text={t('Попробуйте обновить страницу')}
                align={TextAlign.CENTER}
            />
        </div>
    );
};
