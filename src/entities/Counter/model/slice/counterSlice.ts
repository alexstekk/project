import { PayloadAction } from '@reduxjs/toolkit';

import { CounterSchema } from '../types/counterSchema';

import { buildSlice } from '@/shared/lib/store';


const initialState: CounterSchema = {
    value: 0,
};

export const counterSlice = buildSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        add: (state, { payload }: PayloadAction<number>) => {
            state.value += payload;
        },
    },
});

export const { actions: counterActions } = counterSlice;
export const { reducer: counterReducer } = counterSlice;
export const { useActions: useCounter } = counterSlice;
