import {StyleSheet} from 'react-native';
import {HPX, WPX} from '../../utils/responsiveness';
import {ColorPane} from '../../theme/colorScheme';

export const styles = StyleSheet.create({
  avatar: {
    height: WPX(40),
    width: WPX(40),
    borderRadius: WPX(20),
    backgroundColor: ColorPane.parrot,
    alignItems: 'center',
    justifyContent: 'center',
    left: 10,
  },
  center: {alignItems: 'center'},
  avatarText: {
    // fontSize: WPX(14),
    fontWeight: 'bold',
  },
  profile: {
    height: WPX(33),
    width: WPX(33),
    borderRadius: WPX(33),
  },
});
