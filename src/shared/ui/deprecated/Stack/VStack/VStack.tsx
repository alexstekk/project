import { Flex, FlexProps } from '../Flex/Flex';

type vStackProps = Omit<FlexProps, 'direction'>;
/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const VStack = (props: vStackProps) => {
    const { align = 'start' } = props;

    return <Flex direction={'column'} align={align} {...props} />;
};
