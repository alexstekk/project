import { memo, useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { useTranslation } from 'react-i18next';

import { saveJsonSettings, useJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/redux/reduxTypedHooks';
import { Drawer } from '@/shared/ui/Drawer';
import { Modal } from '@/shared/ui/Modal';
import { Text } from '@/shared/ui/Text';

export const ArticlePageGreeting = memo(() => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const [isOpen, setIsOpen] = useState(false);

    const { isArticlesPageWasOpened } = useJsonSettings();

    useEffect(() => {
        if (!isArticlesPageWasOpened) {
            setIsOpen(true);
            dispatch(saveJsonSettings({ isArticlesPageWasOpened: true }));
        }
    }, [dispatch, isArticlesPageWasOpened]);

    const onClose = () => setIsOpen(false);

    const content = (
        <Text
            title={t('Добро пожаловать')}
            text={t('Здесь собраны самые интересные статьи')}
        />
    );

    if (isMobile) {
        return <Drawer>{content}</Drawer>;
    }

    return (
        <Modal lazy isOpen={isOpen} onClose={onClose}>
            {content}
        </Modal>
    );
});
