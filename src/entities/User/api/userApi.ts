import { User } from '..';
import { JsonSettings } from '../model/types/jsonSettings';

import { rtkApi } from '@/shared/api/rtkApi';

interface SetJsonSettingsArgs {
    userId: string;
    jsonSettings: JsonSettings;
}

const userApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        setJsonSettings: build.mutation<User, SetJsonSettingsArgs>({
            query: ({ userId, jsonSettings }) => ({
                url: `/users/${userId}`,
                method: 'PATCH',
                body: {
                    jsonSettings,
                },
            }),
        }),
        getJsonSettings: build.query<User, string>({
            query: (userId) => ({
                url: `/users/${userId}`,
            }),
        }),
    }),
});

export const setJsonSettingsMutations =
    userApi.endpoints.setJsonSettings.initiate;

export const getJsonSettingsQuery = userApi.endpoints.getJsonSettings.initiate;
