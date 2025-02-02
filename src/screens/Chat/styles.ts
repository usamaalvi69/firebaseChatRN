import {StyleSheet} from 'react-native';

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
  sendIcon:{justifyContent: 'center'}
});
