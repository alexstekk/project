import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import { User, userActions } from '@/entities/User';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    ThunkConfig<string>
>('login/loginByUsername', async (authData, thunkAPI) => {
    const { extra, dispatch, rejectWithValue } = thunkAPI;

    try {
        const response = await extra.api.post('/login', authData);

        if (!response.data) {
            throw new Error();
        }

        // localStorage.setItem(
        //     USER_LOCALSTORAGE_KEY,
        //     JSON.stringify(response.data),
        // );
        
        dispatch(userActions.setAuthData(response.data));

        // extra?.navigate?.('/about');

        return response.data;
    } catch (e) {
        console.log(e);
        return rejectWithValue('error');
    }
});
