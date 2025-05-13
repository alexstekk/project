import { Flex, FlexProps } from '../Flex/Flex';

type hStackProps = Omit<FlexProps, 'direction'>

export const HStack = (props: hStackProps) => {

    const {
        className,
    } = props;


    return (
        <Flex
            direction={'row'}
            {...props}
        />
    );
};