import { memo } from 'react';

import { ArticleCodeBlock } from '../../model/types/Article';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { Code as CodeDeprecated } from '@/shared/ui/deprecated/Code';
import { Code } from '@/shared/ui/redesigned/Code';

import cls from './ArticleCodeBlockComponent.module.scss';

interface articleCodeBlockComponentProps {
    className?: string;
    block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = memo(
    (props: articleCodeBlockComponentProps) => {
        const { className, block } = props;

        // const { t } = useTranslation();

        return (
            <div
                className={classNames(cls.articleCodeBlockComponent, {}, [
                    className,
                ])}
            >
                <ToggleFeatures
                    feature={'isAppRedesigned'}
                    on={<Code text={block.code} />}
                    off={<CodeDeprecated text={block.code} />}
                />
            </div>
        );
    },
);
