import { type Reducer } from '@reduxjs/toolkit';
import { ReactNode, useEffect } from 'react';
import { useStore } from 'react-redux';

import { useAppDispatch } from '../../hooks/redux/reduxTypedHooks';

import { ReduxStoreWithManager, StateSchema, StateSchemaKey } from '@/app/providers/StoreProvider';


export type ReducersList = {
    [name in StateSchemaKey]?: Reducer;
}

interface DynamicModuleLoaderProps {
    children: ReactNode;
    reducers: ReducersList;
    removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader = (props: DynamicModuleLoaderProps) => {
    const {
        children,
        reducers,
        removeAfterUnmount = true,
    } = props;

    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useAppDispatch();


    useEffect(() => {
        const mountedReducers = store.reducerManager.getMountedReducers();

        Object.entries(reducers).forEach(([name, reducer]) => {
            const mounted = mountedReducers[name as StateSchemaKey];
            if (!mounted) {
                store.reducerManager.add(name as keyof StateSchema, reducer);
                dispatch({ type: `@INIT ${name} reducer` });
            }
        });

        return (() => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name]) => {
                    store.reducerManager.remove(name as keyof StateSchema);
                    dispatch({ type: `@DESTROY ${name} reducer` });
                });
            }
        });

    }, [dispatch, reducers, removeAfterUnmount, store.reducerManager]);

    return (
        <>
            {children}
        </>
    );
};