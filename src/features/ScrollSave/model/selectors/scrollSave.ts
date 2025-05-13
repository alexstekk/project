import { StateSchema } from '@/app/providers/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';

export const getScrollSavePosition = (state: StateSchema) => state.scrollSave.scroll;
export const getScrollSavePositionByPath = createSelector(
    getScrollSavePosition,
    (state: StateSchema, path: string) => path,
    (scroll, path) => scroll[path] || 0
);