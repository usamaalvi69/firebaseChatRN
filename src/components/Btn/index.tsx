import {Text, Pressable, StyleSheet, ViewStyle} from 'react-native';
import {ColorPane} from '../../theme/colorScheme';

interface BtnProps {
  onPress: () => void;
  label: string;
  disabled?: boolean;
  style?: ViewStyle;
}

export function Btn({onPress, label, disabled, style}: BtnProps) {
  return (
    <Pressable
      disabled={disabled}
      style={[styles.btn, style]}
      onPress={onPress}>
      <Text style={{fontSize: 18, fontWeight: 'bold'}}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    height: 60,
    width: '85%',
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: ColorPane.parrot,
  },
});
