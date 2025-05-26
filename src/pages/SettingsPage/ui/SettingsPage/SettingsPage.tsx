import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { UiDesignSwitcher } from '@/features/uiDesignSwitcher';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/shared/ui/redesigned/Page';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

import cls from './SettingsPage.module.scss';

interface SettingsPageProps {
    className?: string;
}

const SettingsPage = memo((props: SettingsPageProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <Page className={classNames(cls.SettingsPage, {}, [className])}>
            <VStack gap={'16'}>
                <Text title={t('Настройки пользователя')} bold />
                <UiDesignSwitcher />
            </VStack>
        </Page>
    );
});

export default SettingsPage;
