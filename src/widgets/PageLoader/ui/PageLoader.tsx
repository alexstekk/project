import { classNames } from '@/shared/lib/classNames/classNames';
import { Spinner } from '@/shared/ui/deprecated/Spinner';


import cls from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = (props: PageLoaderProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.pageLoader, {}, [className])}>
            <Spinner />
        </div>
    );
};
