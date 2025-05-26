import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { getUserAuthData } from '@/entities/User';
import { getFeatureFlag, updateFeaturesFlags } from '@/shared/lib/features';
import {
    useAppDispatch,
    useAppSelector,
} from '@/shared/lib/hooks/redux/reduxTypedHooks';
import { ListBox } from '@/shared/ui/redesigned/ListBox';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

interface UiDesignSwitcherProps {
    className?: string;
}

export const UiDesignSwitcher = memo((props: UiDesignSwitcherProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const isAppRedesigned = getFeatureFlag('isAppRedesigned');
    const authData = useAppSelector(getUserAuthData);

    const [isLoading, setIsLoading] = useState(false);

    const items = [
        {
            content: t('Новый'),
            value: 'new',
        },
        {
            content: t('Старый'),
            value: 'old',
        },
    ];

    const onChange = async (value: string) => {
        if (authData) {
            setIsLoading(true);
            await dispatch(
                updateFeaturesFlags({
                    userId: authData?.id,
                    newFeatures: {
                        isAppRedesigned: value === 'new',
                    },
                }),
            ).unwrap();
            setIsLoading(false);
        }
    };

    return (
        <HStack gap={'8'}>
            <Text text={t('Вариант интерфейса')} />
            {isLoading ? (
                <Skeleton width={300} height={40} />
            ) : (
                <ListBox
                    items={items}
                    onChange={onChange}
                    className={className}
                    value={isAppRedesigned ? 'new' : 'old'}
                />
            )}
        </HStack>
    );
});
