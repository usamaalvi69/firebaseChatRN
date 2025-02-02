import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import Animated, { withTiming, useSharedValue, useAnimatedStyle } from 'react-native-reanimated';

interface FadeTextProps {
  text: string;  // Text to display
  trigger: boolean;  // Trigger to control fade effect
}

export const FadeText: React.FC<FadeTextProps> = ({ text, trigger }) => {
  const fadeAnim = useSharedValue(0); // Shared value for opacity (initially 0)

  // Fade in effect (set opacity to 1)
  const fadeIn = () => {
    fadeAnim.value = withTiming(1, { duration: 2000 });
  };

  // Fade out effect (set opacity to 0)
  const fadeOut = () => {
    fadeAnim.value = withTiming(0, { duration: 2000 });
  };

  // Effect when `trigger` prop changes
  useEffect(() => {
    if (trigger) {
      fadeIn();
    } else {
      fadeOut();
    }
  }, [trigger]);

  // Animated style for the text
  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: fadeAnim.value,
    };
  });

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Animated.Text style={[{ fontSize: 24 }, animatedStyle]}>
        {text}
      </Animated.Text>
    </View>
  );
};


