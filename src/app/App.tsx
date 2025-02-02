import './styles/index.scss'
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar/ui/Navbar";
import {Sidebar} from "widgets/Sidebar";


export const App = () => {

    const {theme} = useTheme();

    return <div className={classNames('app', {}, [theme])}>
        <Navbar/>
        <div className="contentPage">
            <Sidebar/>
            <AppRouter/>
        </div>
    </div>
}

