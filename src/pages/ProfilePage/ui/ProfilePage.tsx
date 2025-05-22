import { useParams } from 'react-router-dom';

import { EditableProfileCard } from '@/features/editableProfileCard';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/shared/ui/deprecated/Page';
import { VStack } from '@/shared/ui/deprecated/Stack';


interface ProfilePageProps {
    className?: string;
}

const ProfilePage = (props: ProfilePageProps) => {
    const { className } = props;

    const { id } = useParams<{ id: string }>();

    return (
        <Page
            className={classNames('', {}, [className])}
            data-testid={'ProfilePage'}
        >
            <VStack max align={'center'} justify={'center'}>
                <EditableProfileCard id={id || '1'} />
            </VStack>
        </Page>
    );
};

export default ProfilePage;
