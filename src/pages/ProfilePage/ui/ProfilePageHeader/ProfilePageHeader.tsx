import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfilePageHeader.module.scss';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button } from 'shared/ui/Button';
import { ButtonVariants } from 'shared/ui/Button/ui/Button';
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/redux/reduxTypedHooks';
import { getProfileData, getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';
import { useCallback } from 'react';
import { getUserAuthData } from 'entities/User';
import { HStack } from 'shared/ui/Stack/HStack/HStack';


interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation();
    const authData = useAppSelector(getUserAuthData);
    const profileData = useAppSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;

    const readonly = useAppSelector(getProfileReadonly);

    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <HStack className={classNames(cls.profilePageHeader, {}, [className])} justify={'between'} max>
            <Text title={t('Профиль')}/>
            <div className={cls.buttons}>
                {
                    canEdit && (
                        readonly ? (
                            <Button
                                className={cls.editBtn}
                                variant={ButtonVariants.OUTLINE}
                                onClick={onEdit}
                            >
                                {t('Редактировать')}
                            </Button>
                        ) : (
                            <HStack gap={'8'}>
                                <Button
                                    className={cls.cancelBtn}
                                    variant={ButtonVariants.OUTLINE_RED}
                                    onClick={onCancelEdit}
                                >
                                    {t('Отменить')}
                                </Button>
                                <Button
                                    className={cls.saveBtn}
                                    variant={ButtonVariants.OUTLINE}
                                    onClick={onSave}
                                >
                                    {t('Сохранить ')}
                                </Button>
                            </HStack>
                        )

                    )
                }

            </div>

        </HStack>
    );
};