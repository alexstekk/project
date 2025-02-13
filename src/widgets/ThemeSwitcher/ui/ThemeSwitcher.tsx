import {classNames} from "shared/lib/classNames/classNames";
import {Theme, useTheme} from "app/providers/ThemeProvider";
import SunIcon from 'shared/assets/icons/solar--sun-2-bold.svg';
import MoonIcon from 'shared/assets/icons/solar--moon-bold.svg';
import {Button} from "shared/ui/Button";
import {ButtonVariants} from "shared/ui/Button/ui/Button";

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
    const {className} = props;

    const {theme, toggleTheme} = useTheme();

    return (<Button
            variant={ButtonVariants.CLEAR}
            onClick={toggleTheme}
            className={classNames('', {}, [className])}
        >
        {theme === Theme.LIGHT ? <SunIcon/> : <MoonIcon/>}
    </Button>
    );
};