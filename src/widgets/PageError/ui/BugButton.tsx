import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ButtonDeprecated } from '@/shared/ui/deprecated/Button';

export const BugButton = () => {
    const [error, setError] = useState(false);

    const { t } = useTranslation();

    const onThrow = () => {
        setError(true);
    };

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <ButtonDeprecated onClick={onThrow}>
            {t('Сгенерить ошибку')}
        </ButtonDeprecated>
    );
};
