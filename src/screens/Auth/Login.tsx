import React, {useState} from 'react';
import {View, Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {signUp, signIn} from '../../services/auth/authService';
import {AuthValues} from './authTypes';
import {AuthForm} from './AuthForm';
import {styles} from './styles';
import {NAVIGATION} from '../../constant/navigation';
import {FormikHelpers} from 'formik';

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
      await signUp(values.email, values.password);
      Alert.alert('Success', 'User registered successfully');
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
      <AuthForm
        onSubmit={isSignUp ? handleSignUp : (handleSignIn as any)}
        isSignUp={isSignUp}
        setIsSignUp={setIsSignUp}
      />
    </View>
  );
};
