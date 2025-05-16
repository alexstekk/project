export type { AddCommentFormSchema } from './model/types/addCommentForm';

export { AddCommentFormLazy as AddCommentForm } from './ui/AddCommentForm/AddCommentForm.lazy';

export { addCommentFormActions, addCommentFormReducer } from './model/slice/addCommentFormSlice';