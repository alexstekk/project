import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleImageBlockComponent.module.scss';
import { memo } from 'react';
import { ArticleImageBlock } from '../../model/types/Article';
import { Text, TextAlign } from 'shared/ui/Text/Text';


interface articleImageBlockComponentProps {
    className?: string;
    block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo((props: articleImageBlockComponentProps) => {
    const {
        className,
        block,
    } = props;

    // const { t } = useTranslation();

    return (
        <div className={classNames(cls.articleImageBlockComponent, {}, [className])}>
            <img src={block.src} alt={block.title}/>
            {block.title && (
                <Text
                    text={block.title}
                    align={TextAlign.CENTER}
                />
            )}
        </div>
    );
});