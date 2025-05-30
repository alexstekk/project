import { FunctionComponent, lazy } from 'react';

import { addCommentFormProps } from './AddCommentForm';

export const AddCommentFormLazy = lazy<FunctionComponent<addCommentFormProps>>(
    () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(import('./AddCommentForm'));
            }, 1500);
        });
    },
);
