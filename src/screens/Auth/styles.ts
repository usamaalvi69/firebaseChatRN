import {StyleSheet} from 'react-native';
import {ColorPane} from '../../theme/colorScheme';
import {HPX, WPX} from '../../utils/responsiveness';

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
  logo: {height: WPX(35), width: WPX(35)},
  iconContainer: {flex: 0.6, justifyContent: 'center', alignItems: 'center'},
  form: {flex: 1},
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
  microsoftButton: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
    gap: WPX(40),
    paddingVertical: WPX(10),
    paddingHorizontal: WPX(20),
    backgroundColor: ColorPane.microsoft,
    borderRadius: 10,
    marginTop: 20,
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 20,
  },
  line: {
    // flex: 0.5,
    width: '40%',
    height: 1,
    backgroundColor: ColorPane.lightGrey,
  },
  orText: {
    color: 'white',
    fontSize: WPX(14),
    fontWeight: 'bold',
    marginHorizontal: 15,
  },
  microsoftText: {
    color: 'white',
    fontSize: WPX(14),
    fontWeight: 'bold',
  },

  userText: {
    marginTop: 20,
    fontSize: 16,
  },
  toggle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: HPX(40),
    gap: 8,
  },
  btn: {
    height: 60,
    width: 300,
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: ColorPane.parrot,
  },
  authLabel: {color: ColorPane.white, fontWeight: 'bold', fontSize: WPX(14)},
});
