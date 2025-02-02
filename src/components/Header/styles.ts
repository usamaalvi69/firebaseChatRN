import {StyleSheet} from 'react-native';
import {HPX, WPX} from '../../utils/responsiveness';
import { ColorPane } from '../../theme/colorScheme';

/* @ts-ignore */
export const createStyles = colors =>
  StyleSheet.create({
    header: {
      height: HPX(64),
      width: '100%',
      justifyContent: 'space-between',
      backgroundColor: ColorPane.midnight,
      flexDirection: 'row',
      paddingHorizontal: WPX(15),
      alignItems: 'center',
      // shadowColor: '#000',
      // shadowOffset: {width: 0, height: 2},
      // shadowOpacity: 0.2,
      // shadowRadius: 3,
      // elevation: 5,
    },
    subContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    txt: {color: 'white', fontSize: 16, fontWeight: 'bold'},
    subtxt: {color: 'white', fontSize: 13},

    // Avatar (Initial Circle)
    avatar: {
      height: WPX(40),
      width: WPX(40),
      borderRadius: WPX(20),
      backgroundColor: '#BD725C', // Use theme color
      alignItems: 'center',
      justifyContent: 'center',
    },
    avatarText: {
      color: colors.white,
      fontSize: WPX(18),
      fontWeight: 'bold',
    },
  });
