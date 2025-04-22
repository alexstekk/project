import { Flex, FlexProps } from 'shared/ui/Stack/Flex/Flex';

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