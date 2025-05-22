import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';


import {
    getAddCommentFormError,
    getAddCommentFormText,
} from '../../model/selectors/addCommentFormSelectors';
import {
    addCommentFormActions,
    addCommentFormReducer,
} from '../../model/slice/addCommentFormSlice';

import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    useAppDispatch,
    useAppSelector,
} from '@/shared/lib/hooks/redux/reduxTypedHooks';
import { Button } from '@/shared/ui/deprecated/Button';
import { ButtonVariants } from '@/shared/ui/deprecated/Button/ui/Button';
import { Input } from '@/shared/ui/deprecated/Input/Input';

import cls from './AddCommentForm.module.scss';

export interface addCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo((props: addCommentFormProps) => {
    const { className, onSendComment } = props;

    const dispatch = useAppDispatch();

    const { t } = useTranslation();
    const text = useAppSelector(getAddCommentFormText);
    const error = useAppSelector(getAddCommentFormError);

    const onCommentTextChange = useCallback(
        (value: string) => {
            dispatch(addCommentFormActions.setText(value));
        },
        [dispatch],
    );

    const onSendHandler = useCallback(() => {
        onSendComment(text || '');
        onCommentTextChange('');
    }, [onCommentTextChange, onSendComment, text]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div
                className={classNames(cls.addCommentForm, {}, [className])}
                data-testid={'AddCommentForm'}
            >
                <Input
                    placeholder={t('Введите текст комментария')}
                    value={text}
                    onChange={onCommentTextChange}
                    className={cls.input}
                    data-testid={'AddCommentForm.Input'}
                />
                <Button
                    variant={ButtonVariants.OUTLINE}
                    onClick={onSendHandler}
                    data-testid={'AddCommentForm.Button'}
                >
                    {t('Отправить')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default memo(AddCommentForm);
