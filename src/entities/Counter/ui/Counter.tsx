import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useCounter } from '../model/slice/counterSlice';

import { ButtonDeprecated } from '@/shared/ui/deprecated/Button';

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
            <ButtonDeprecated onClick={onIncrement} data-testid="increment-btn">
                increment
            </ButtonDeprecated>
            <ButtonDeprecated onClick={onDecrement} data-testid="decrement-btn">
                decrement
            </ButtonDeprecated>{' '}
            <ButtonDeprecated onClick={onAddFive}>+5</ButtonDeprecated>
        </div>
    );
};
