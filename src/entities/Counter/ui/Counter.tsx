
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useCounter } from '../model/slice/counterSlice';

import { Button } from '@/shared/ui/Button';

export const Counter = () => {
    // const dispatch = useDispatch();

    // const counterValue = useSelector(getCounterValue);
    const counterValue = useCounterValue();

    const { add, decrement, increment } = useCounter();

    const onIncrement = () => {
        increment();
    };
    const onDecrement = () => {
        decrement();
    };
    const onAddFive = () => {
        add(5);
    };

    return (
        <div>
            <h1 data-testid="value-title">value = {counterValue}</h1>
            <Button onClick={onIncrement} data-testid="increment-btn">
                increment
            </Button>
            <Button onClick={onDecrement} data-testid="decrement-btn">
                decrement
            </Button>{' '}
            <Button onClick={onAddFive}>+5</Button>
        </div>
    );
};
