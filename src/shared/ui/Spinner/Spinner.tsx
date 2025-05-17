import { classNames } from '@/shared/lib/classNames/classNames';

import './Spinner.scss';

interface SpinnerProps {
    className?: string;
}

export const Spinner = (props: SpinnerProps) => {
    const { className } = props;

    return (
        <div className={classNames('ldsEllipsis', {}, [className])}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};
