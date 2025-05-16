import { memo } from 'react';

import { ArticleCodeBlock } from '../../model/types/Article';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Code } from '@/shared/ui/Code';

import cls from './ArticleCodeBlockComponent.module.scss';


interface articleCodeBlockComponentProps {
    className?: string;
    block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = memo((props: articleCodeBlockComponentProps) => {
    const {
        className,
        block,
    } = props;

    // const { t } = useTranslation();

    return (
        <div className={classNames(cls.articleCodeBlockComponent, {}, [className])}>
            <Code text={block.code}/>
        </div>
    );
});