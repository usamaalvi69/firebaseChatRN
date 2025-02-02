import React, {useEffect} from 'react';
import {Pressable} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import {STRINGS} from '../../utils/strings';
import {styles} from './styles';

interface AnimatedButtonProps {
  isSignUp: boolean;
  isSubmitting: boolean;
  handleSubmit: () => void;
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  isSignUp,
  isSubmitting,
  handleSubmit,
}) => {
  const rotation = useSharedValue(0);

  useEffect(() => {
    rotation.value = withTiming(isSignUp ? 180 : 0, {duration: 500});
  }, [isSignUp]);

  // Animated style for vertical rotation (X-axis) for the button
  const animatedBtnStyle = useAnimatedStyle(() => {
    return {
      transform: [{rotateY: `${rotation.value}deg`}],
    };
  });

  // Animated style to reverse the rotation for the text
  const animatedTextStyle = useAnimatedStyle(() => {
    return {
      transform: [{rotateY: `${-rotation.value}deg`}],
    };
  });

  return (
    <Animated.View style={animatedBtnStyle}>
      <Pressable
        disabled={isSubmitting}
        style={styles.btn}
        onPress={handleSubmit}>
        <Animated.Text
          style={[{fontSize: 18, fontWeight: 'bold'}, animatedTextStyle]}>
          {isSubmitting
            ? STRINGS.submittingButtonText
            : isSignUp
            ? STRINGS.signupText
            : STRINGS.loginButtonText}
        </Animated.Text>
      </Pressable>
    </Animated.View>
  );
};
