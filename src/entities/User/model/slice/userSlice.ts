import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { initAuthData } from '../services/initAuthData';
import { saveJsonSettings } from '../services/saveJsonSettings';
import { JsonSettings } from '../types/jsonSettings';
import { User, UserSchema } from '../types/user';

import {
    LOCAL_STORAGE_LAST_DESIGN_KEY,
    USER_LOCALSTORAGE_KEY,
} from '@/shared/const/localstorage';
import { setFeatureFlag } from '@/shared/lib/features';

const initialState: UserSchema = {
    _inited: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
            setFeatureFlag(action.payload.features);
            localStorage.setItem(USER_LOCALSTORAGE_KEY, action.payload.id);
            localStorage.setItem(
                LOCAL_STORAGE_LAST_DESIGN_KEY,
                action.payload?.features?.isAppRedesigned ? 'new' : 'old',
            );
        },
        // initAuthData: (state) => {
        //     const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
        //
        //     if (user) {
        //         const json = JSON.parse(user) as User;
        //         state.authData = json;
        //         setFeatureFlag(json.features);
        //     }
        //     state._inited = true;
        // },
        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(
                saveJsonSettings.fulfilled,
                (state, action: PayloadAction<JsonSettings>) => {
                    if (state.authData) {
                        state.authData.jsonSettings = action.payload;
                    }
                },
            )
            .addCase(
                initAuthData.fulfilled,
                (state, action: PayloadAction<User>) => {
                    state.authData = action.payload;
                    setFeatureFlag(action.payload.features);
                    state._inited = true;
                },
            )
            .addCase(initAuthData.rejected, (state) => {
                state._inited = true;
            });
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
