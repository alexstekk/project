import { memo, ReactNode, useCallback, useEffect } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Drawer.module.scss';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Portal } from '../Portal/Portal';
import { Overlay } from '../Overlay/Overlay';
import { AnimationProvider, useAnimationLibs } from '@/shared/lib/components/AnimationProvider';


interface drawerProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

const height = window.innerHeight - 150;

export const DrawerContent = memo((props: drawerProps) => {

    const { Spring, Gesture } = useAnimationLibs();

    const {
        className,
        children,
        isOpen,
        onClose,
    } = props;

    const [{ y }, api] = Spring.useSpring(() => ({ y: height }));

    const { theme } = useTheme();

    const handleClose = () => {
        onClose?.();
    };

    const open = useCallback(() => {
        // when cancel is true, it means that the user passed the upwards threshold
        // so we change the spring config to create a nice wobbly effect
        api.start({ y: 0, immediate: false, config: Spring.config.stiff });
    }, [Spring.config.stiff, api]);

    const close = (velocity = 0) => {
        api.start({ y: height, immediate: false, config: { ...Spring.config.stiff, velocity }, onResolve: handleClose });
    };

    const bind = Gesture.useDrag(
        ({ last, velocity: [, vy], direction: [, dy], offset: [, oy], cancel }) => {
            // if the user drags up passed a threshold, then we cancel
            // the drag so that the sheet resets to its open position
            if (oy < -70) cancel();

            // when the user releases the sheet, we check whether it passed
            // the threshold for it to close, or if we reset it to its open positino
            if (last) {
                if (oy > height * 0.5 || (vy > 0.5 && dy > 0)) {
                    close(vy);
                } else {
                    open();
                }
            }
                // when the user keeps dragging, we just move the sheet according to
            // the cursor position
            else api.start({ y: oy, immediate: true });
        },
        { from: () => [0, y.get()], filterTaps: true, bounds: { top: 0 }, rubberband: true }
    );

    const display = y.to((py) => (py < height ? 'block' : 'none'));

    useEffect(() => {
        if (isOpen) {
            open();
        }
    }, [api, isOpen, open]);

    if (!isOpen) {
        return null;
    }

    const overlayStyle = {
        opacity: y.to([0, height], [1, 0], 'clamp'),
    };

    return (
        <Portal>
            <div className={classNames(cls.drawer, {}, [className, theme])}>
                {/*@ts-ignore*/}
                <Overlay
                    as={Spring.a.div}
                    onClick={() => onClose?.()}
                    className={cls.overlay}
                    style={overlayStyle}
                />
                {/*@ts-ignore*/}
                <Spring.a.div
                    className={cls.sheet}
                    style={{ display, bottom: `calc(-100vh + ${height - 1}px)`, y }}
                    {...bind()}

                >
                    {children}
                </Spring.a.div>
            </div>
        </Portal>
    );
});

const DrawerAsync = memo((props: drawerProps) => {
    const { isLoaded } = useAnimationLibs();

    if (!isLoaded) {
        return null;
    }

    return <DrawerContent {...props}/>;
});

export const Drawer = (props: drawerProps) => {
    return (
        <AnimationProvider>
            <DrawerAsync {...props}/>
        </AnimationProvider>
    );
};