import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { ArticleDetails } from '@/entities/Article';
import { Card } from '@/shared/ui/redesigned/Card';

interface detailsContainerProps {
    className?: string;
}

export const DetailsContainer = memo((props: detailsContainerProps) => {
    const { id } = useParams<{ id: string }>();

    const { className } = props;

    const { t } = useTranslation();

    return (
        <Card className={className} corners={'roundCorners'}>
            <ArticleDetails id={id || '1'} />
        </Card>
    );
});
