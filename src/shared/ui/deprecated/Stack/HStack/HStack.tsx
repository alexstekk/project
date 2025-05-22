import { Flex, FlexProps } from '../Flex/Flex';

type hStackProps = Omit<FlexProps, 'direction'>;
/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const HStack = (props: hStackProps) => {
    return <Flex direction={'row'} {...props} />;
};
