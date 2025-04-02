import { Profile } from 'entities/Profile';

export const validateProfileData = (profile: Profile) => {

    const { first, lastname, age, country } = profile;

    if (!first || !lastname) {
        return '';
    }

};