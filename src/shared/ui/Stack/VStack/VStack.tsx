import { Flex, FlexProps } from '../Flex/Flex';

type vStackProps = Omit<FlexProps, 'direction'>

export const VStack = (props: vStackProps) => {

    const {
        align = 'start',
    } = props;


    return (
        <Flex
            direction={'column'}
            align={align}
            {...props}
        />
    );
};