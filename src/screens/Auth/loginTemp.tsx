import React, {useState} from 'react';
import {View, Alert, SafeAreaView, StyleSheet, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {signUp, signIn} from '../../services/auth/authService';
import {AuthValues} from './authTypes';
import {AuthForm} from './AuthForm';
import {NAVIGATION} from '../../constant/navigation';
import {FormikHelpers} from 'formik';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {HPX, WPX} from '../../utils/responsiveness';
import { ColorPane } from '../../theme/colorScheme';

type AuthStackNavigation = NavigationProp<any>;

export const Login: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState<boolean>(true);
  const dispatch = useDispatch();
  const navigation = useNavigation<AuthStackNavigation>();

  // Handle Sign-Up
  const handleSignUp = async (
    values: AuthValues,
    actions: FormikHelpers<AuthValues>,
  ) => {
    try {
      await signUp(values.email, values.password, dispatch);
      actions.resetForm();
    } catch (error: any) {
      Alert.alert('Error', error.message);
    } finally {
      actions.setSubmitting(false);
    }
  };

  // Handle Sign-In
  const handleSignIn = async (
    values: AuthValues,
    actions: FormikHelpers<AuthValues>,
  ) => {
    try {
      await signIn(values.email, values.password, dispatch);
      actions.resetForm();
      navigation.navigate(NAVIGATION.USERS);
    } catch (error: any) {
      Alert.alert('Error', error.message);
    } finally {
      actions.setSubmitting(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <FontAwesome size={WPX(140)} color={'white'} name={'wechat'} />
      </View>
      <View style={styles.form}>
        <AuthForm
          onSubmit={isSignUp ? handleSignUp : (handleSignIn as any)}
          isSignUp={isSignUp}
          setIsSignUp={setIsSignUp}
        />
        {/* Add microsft authentication */}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
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
  iconContainer:{flex: 0.7, justifyContent: 'center', alignItems: 'center'},
  form:{flex: 1},
  input: {
    width: '80%',
    padding: 10,
    marginVertical: 20,
    borderColor: ColorPane.placeHolder,
    borderBottomWidth: 1,
    borderRadius: 5,
  },
  joinUs:{color: ColorPane.lightGrey, fontSize: WPX(14)},
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
    gap: 8
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
