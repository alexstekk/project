import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { profileActions } from '../../model/slice/profileSlice';

import { getUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks/redux/reduxTypedHooks';
import { ButtonVariants , Button } from '@/shared/ui/Button';
import { HStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import cls from './EditableProfileCardHeader.module.scss';


interface editableProfileCardHeaderProps {
    className?: string;
}

export const EditableProfileCardHeader = memo((props: editableProfileCardHeaderProps) => {
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
        <HStack className={classNames('', {}, [className])} justify={'between'} max>
            <Text title={t('Профиль')}/>
            <div className={cls.buttons}>
                {
                    canEdit && (
                        readonly ? (
                            <Button
                                className={cls.editBtn}
                                variant={ButtonVariants.OUTLINE}
                                onClick={onEdit}
                                data-testid={'EditableProfileCardHeader.EditButton'}
                            >
                                {t('Редактировать')}
                            </Button>
                        ) : (
                            <HStack gap={'8'}>
                                <Button
                                    className={cls.cancelBtn}
                                    variant={ButtonVariants.OUTLINE_RED}
                                    onClick={onCancelEdit}
                                    data-testid={'EditableProfileCardHeader.CancelButton'}
                                >
                                    {t('Отменить')}
                                </Button>
                                <Button
                                    className={cls.saveBtn}
                                    variant={ButtonVariants.OUTLINE}
                                    onClick={onSave}
                                    data-testid={'EditableProfileCardHeader.SaveButton'}
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
});