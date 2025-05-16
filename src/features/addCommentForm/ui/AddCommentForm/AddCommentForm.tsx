import { memo } from 'react';

import { addCommentFormReducer } from '../../model/slice/addCommentFormSlice';

import { AddCommentForm } from './AddCommentForm.1';

import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';


export interface addCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

export const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
};

export default memo(AddCommentForm);