import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleCodeBlockComponent.module.scss';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleCodeBlock } from '../../model/types/Article';
import { Code } from 'shared/ui/Code/Code';


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