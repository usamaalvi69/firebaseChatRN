import {StyleSheet} from 'react-native';
import {ColorPane} from '../../theme/colorScheme';

// Styles
export const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  },
  authLabel: {color: ColorPane.bluish, fontWeight: 'bold'},
});
