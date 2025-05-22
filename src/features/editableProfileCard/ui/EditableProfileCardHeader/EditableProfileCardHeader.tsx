import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { profileActions } from '../../model/slice/profileSlice';

import { getUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    useAppDispatch,
    useAppSelector,
} from '@/shared/lib/hooks/redux/reduxTypedHooks';
import {
    ButtonDeprecated,
    ButtonVariants,
} from '@/shared/ui/deprecated/Button';
import { HStack } from '@/shared/ui/deprecated/Stack';
import { Text } from '@/shared/ui/deprecated/Text';

interface editableProfileCardHeaderProps {
    className?: string;
}

export const EditableProfileCardHeader = memo(
    (props: editableProfileCardHeaderProps) => {
        const { className } = props;

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
            <HStack
                className={classNames('', {}, [className])}
                justify={'between'}
                max
            >
                <Text title={t('Профиль')} />
                <div>
                    {canEdit &&
                        (readonly ? (
                            <ButtonDeprecated
                                variant={ButtonVariants.OUTLINE}
                                onClick={onEdit}
                                data-testid={
                                    'EditableProfileCardHeader.EditButton'
                                }
                            >
                                {t('Редактировать')}
                            </ButtonDeprecated>
                        ) : (
                            <HStack gap={'8'}>
                                <ButtonDeprecated
                                    variant={ButtonVariants.OUTLINE_RED}
                                    onClick={onCancelEdit}
                                    data-testid={
                                        'EditableProfileCardHeader.CancelButton'
                                    }
                                >
                                    {t('Отменить')}
                                </ButtonDeprecated>
                                <ButtonDeprecated
                                    variant={ButtonVariants.OUTLINE}
                                    onClick={onSave}
                                    data-testid={
                                        'EditableProfileCardHeader.SaveButton'
                                    }
                                >
                                    {t('Сохранить ')}
                                </ButtonDeprecated>
                            </HStack>
                        ))}
                </div>
            </HStack>
        );
    },
);
