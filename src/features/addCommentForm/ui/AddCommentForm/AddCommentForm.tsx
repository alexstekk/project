import { memo } from 'react';
import { addCommentFormReducer } from '../../model/slice/addCommentFormSlice';
import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { AddCommentForm } from './AddCommentForm.1';


export interface addCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

export const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
};

export default memo(AddCommentForm);