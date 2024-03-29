import {
    TransitionSpec,
    StackCardStyleInterpolator,
} from '@react-navigation/stack/lib/typescript/src/types';

export const transitionSpec: TransitionSpec = {
    animation: 'spring',
    config: {
        stiffness: 1000,
        damping: 500,
        mass: 3,
        overshootClamping: true,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 0.01,
    },
};
export const cardStyleInterpolator: StackCardStyleInterpolator = ({
    current,
    layouts,
}) => {
    return {
        containerStyle: {
            transform: [
                {
                    translateX: current.progress.interpolate({
                        inputRange: [0, 1],
                        outputRange: [layouts.screen.width, 0],
                    }),
                },
            ],
        },
    };
};
