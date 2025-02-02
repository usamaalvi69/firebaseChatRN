import {StyleSheet} from 'react-native';
import {ColorPane} from '../../theme/colorScheme';

export const styles = StyleSheet.create({
  container: {flex: 1},
  bgImage: {
    height: 100,
    width: 100,
    top: -20,
  },
  titleText: {
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'IBMPlexSans-Regular',
    color: 'white',
  },
  topSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 35,
  },
  titleSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 3,
  },
  sendIcon: {justifyContent: 'center'},
  toolBar: {
    backgroundColor: ColorPane.darkish,
  },
  composer: {
    paddingHorizontal: 5,
    color: ColorPane.white,
  },
});
