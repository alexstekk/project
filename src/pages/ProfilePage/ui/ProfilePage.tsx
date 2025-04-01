import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { fetchProfileData, getProfileData, profileReducer } from 'entities/Profile';
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/redux/reduxTypedHooks';
import { useEffect } from 'react';
import { ProfileCard } from 'entities/Profile/ui/ProfileCard/ProfileCard';

const reducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = (props: ProfilePageProps) => {
    const {
        className,
    } = props;

    const data = useAppSelector(getProfileData);
    //const error = useAppSelector(getProfileError);
    //const isLoading = useAppSelector(getProfileIsLoading);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    const { t } = useTranslation();

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                {t('Profile Page')}
                <ProfileCard data={data}/>
            </div>
        </DynamicModuleLoader>

    );
};

export default ProfilePage;