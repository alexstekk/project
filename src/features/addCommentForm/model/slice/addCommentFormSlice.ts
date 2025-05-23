import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { AddCommentFormSchema } from '../types/addCommentForm';

const initialState: AddCommentFormSchema = {
    text: '',
    error: '',
};

export const addCommentFormSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
    },
    // extraReducers: (builder) => {
    // builder;
    // .addCase(loginByUsername.pending, (state) => {
    //     state.error = '';
    //     state.isLoading = true;
    // })
    // .addCase(loginByUsername.fulfilled, (state) => {
    //     state.isLoading = false;
    //     state.error = '';
    //
    // })
    // .addCase(loginByUsername.rejected, (state, action) => {
    //     state.isLoading = false;
    //     state.error = action.payload;
    // });
    // }
});

export const { actions: addCommentFormActions } = addCommentFormSlice;
export const { reducer: addCommentFormReducer } = addCommentFormSlice;
