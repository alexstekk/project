import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleTextBlockComponent.module.scss';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleTextBlock } from '../../model/types/Article';
import { Text } from '@/shared/ui/Text/Text';


interface articleTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo((props: articleTextBlockComponentProps) => {
    const {
        className,
        block,
    } = props;

    // const { t } = useTranslation();

    return (
        <div className={classNames(cls.articleTextBlockComponent, {}, [className])}>
            {block.title && (
                <Text title={block.title} className={cls.title}/>
            )}
            {
                block.paragraphs.map((p, i) => (
                    <Text
                        key={i}
                        text={p}
                        className={cls.paragraph}
                    />
                ))
            }
        </div>
    );
});