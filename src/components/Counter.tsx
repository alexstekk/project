import {useState} from "react";
import classes from './Counter.module.scss';

export const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(c => c + 1)
    }

    return (
        <div className={classes.button}>
            <h1 className={classes.green}>{count}</h1>
            <button onClick={increment}>increment</button>
        </div>
    )
}