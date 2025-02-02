import {StyleSheet} from 'react-native';
import {ColorPane} from '../../theme/colorScheme';
import {HPX, WPX} from '../../utils/responsiveness';
import {screenWidth} from '../../constant/dimensions';

// Styles
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorPane.darkish,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    padding: 10,
    marginVertical: 20,
    borderColor: ColorPane.placeHolder,
    borderBottomWidth: 1,
    borderRadius: 5,
  },
  joinUs: {color: ColorPane.lightGrey, fontSize: WPX(14)},
  errorText: {
    color: ColorPane.blaze,
    fontSize: 12,
    alignSelf: 'flex-end',
    bottom: 14,
    right: 20,
  },
  orText: {
    marginVertical: 10,
    fontWeight: 'bold',
  },
  userText: {
    marginTop: 20,
    fontSize: 16,
  },
  toggle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
    gap: 8,
  },
  btn: {
    height: 60,
    width: screenWidth * 0.85,
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: HPX(10),
    marginBottom: HPX(15),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: ColorPane.parrot,
  },
  authLabel: {color: ColorPane.white, fontWeight: 'bold', fontSize: WPX(14)},
});
