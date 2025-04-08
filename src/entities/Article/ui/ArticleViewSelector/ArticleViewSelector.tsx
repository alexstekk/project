import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleViewSelector.module.scss';
import { useTranslation } from 'react-i18next';
import { ArticleView } from 'entities/Article';
import ListIcon from 'shared/assets/icons/solar--list-outline.svg';
import GridIcon from 'shared/assets/icons/solar--widget-outline.svg';
import { Button } from 'shared/ui/Button';
import { ButtonVariants } from 'shared/ui/Button/ui/Button';


interface articleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: <GridIcon/>,
    },
    {
        view: ArticleView.BIG,
        icon: <ListIcon/>,
    },
];

export const ArticleViewSelector = memo((props: articleViewSelectorProps) => {
    const {
        className,
        view,
        onViewClick,
    } = props;

    const { t } = useTranslation();

    const onClick = (view: ArticleView) => () => {
        onViewClick?.(view);
    };


    return (
        <div className={classNames(cls.articleViewSelector, {}, [className])}>
            {
                viewTypes.map(viewType => (
                    <Button
                        onClick={onClick?.(viewType.view)}
                        key={viewType.view}
                        variant={ButtonVariants.CLEAR}
                        className={classNames('', { [cls.active]: viewType.view === view }, [className])}
                    >
                        {
                            viewType.icon
                        }
                    </Button>
                ))
            }
        </div>
    );
});