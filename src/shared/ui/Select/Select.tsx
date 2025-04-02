import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';
import { ChangeEvent, memo, useMemo } from 'react';

interface SelectOptions {
    value: string;
    content: string;
}


interface SelectProps {
    className?: string;
    label?: string;
    options?: SelectOptions[];
    value?: string;
    onChange?: (value: string) => void;
    readonly?: boolean;
}

export const Select = memo((props: SelectProps) => {
    const {
        className,
        label,
        options,
        value,
        readonly,
        onChange,
    } = props;

    const optionList = useMemo(() => {
        return options?.map(opt => (
            <option
                key={opt.value}
                className={cls.option}
                value={opt.value}
            >
                {opt.content}
            </option>
        ));
    }, [options]);

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };


    return (
        <div className={classNames(cls.wrapper, {}, [className])}>
            {label && (
                <span
                    className={cls.label}
                >
                {label}
                </span>
            )}
            <select
                className={cls.select}
                value={value}
                onChange={onChangeHandler}
                disabled={readonly}
            >
                {optionList}
            </select>
        </div>
    );
});