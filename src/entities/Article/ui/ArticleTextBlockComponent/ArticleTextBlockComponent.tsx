import { memo } from 'react';

import { ArticleTextBlock } from '../../model/types/Article';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';

import cls from './ArticleTextBlockComponent.module.scss';

interface articleTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo(
    (props: articleTextBlockComponentProps) => {
        const { className, block } = props;

        // const { t } = useTranslation();

        return (
            <div
                className={classNames(cls.articleTextBlockComponent, {}, [
                    className,
                ])}
            >
                {block.title && (
                    <ToggleFeatures
                        feature={'isAppRedesigned'}
                        on={<Text title={block.title} className={cls.title} />}
                        off={
                            <TextDeprecated
                                title={block.title}
                                className={cls.title}
                            />
                        }
                    />
                )}
                {block.paragraphs.map((p, i) => (
                    <ToggleFeatures
                        key={i}
                        feature={'isAppRedesigned'}
                        on={<Text text={p} className={cls.paragraph} />}
                        off={
                            <TextDeprecated
                                text={p}
                                className={cls.paragraph}
                            />
                        }
                    />
                ))}
            </div>
        );
    },
);
