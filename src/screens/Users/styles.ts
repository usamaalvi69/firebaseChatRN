import {StyleSheet} from 'react-native';
import {HPX, WPX} from '../../utils/responsiveness';
import {ColorPane} from '../../theme/colorScheme';

const COLORS = {
  primary: '#BD725C',
  white: '#FFFFFF',
  red: 'red',
  textPrimary: '#535862',
};

export const createStyles = () =>
  StyleSheet.create({
    initials: {
      height: WPX(40),
      width: WPX(40),
      alignItems: 'center',
      justifyContent: 'center',
      //   marginLeft: WPX(15),
      borderRadius: WPX(20),
      backgroundColor: COLORS.primary,
    },
    list: {
      marginTop: 5,
      width: '100%',
      alignSelf: 'center',
    },
    usersList: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      //   gap: WPX(12),
      // backgroundColor: ColorPane.midnight,
      marginBottom: HPX(1),
      paddingHorizontal: WPX(15),
      paddingVertical: HPX(10),
      // borderRadius: WPX(5),
    },
    signout: {
      color: COLORS.red,
      position: 'absolute',
      bottom: HPX(50),
      alignSelf: 'center',
      fontSize: WPX(24),
      fontWeight: '400',
    },
    name: {fontWeight: '600', color: 'white'},
    header: {
      flexDirection: 'row',
      height: HPX(64),
      backgroundColor: ColorPane.midnight,
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: WPX(15),
    },
    title: {
      fontSize: WPX(20),
      fontWeight: 'bold',
      color: COLORS.white,
    },
    avatar: {
      height: WPX(40),
      width: WPX(40),
      borderRadius: WPX(20),
      backgroundColor: '#BD725C',
      alignItems: 'center',
      justifyContent: 'center',
      left: 10,
    },
    avatarText: {
      color: 'white',
      fontSize: WPX(18),
      fontWeight: 'bold',
    },
    lastMsg: {
      color: 'gray',
      fontSize: 12,
    },
    row: {flexDirection: 'row', alignItems: 'center', gap: 10},

    buffer: {width: WPX(30)},
    logout: {position: 'absolute', bottom: 50, marginTop: 1},
  });
