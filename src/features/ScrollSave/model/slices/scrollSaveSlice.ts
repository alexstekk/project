import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScrollSaveSchema } from 'features/ScrollSave';

const initialState: ScrollSaveSchema = {
    scroll: {}
};

export const scrollSaveSlice = createSlice({
    name: 'scrollSave',
    initialState,
    reducers: {
        setScrollPosition: (state, action: PayloadAction<{ path: string, position: number }>) => {
            state.scroll[action.payload.path] = action.payload.position;
        },
    },

});

export const { actions: scrollSaveSliceActions } = scrollSaveSlice;
export const { reducer: scrollSaveSliceReducer } = scrollSaveSlice;