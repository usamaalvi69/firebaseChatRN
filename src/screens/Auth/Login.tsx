import React, {useState} from 'react';
import {View, Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {signUp, signIn} from '../../services/auth/authService';
import {AuthValues} from './authTypes';
import {AuthForm} from './AuthForm';
import {NAVIGATION} from '../../constant/navigation';
import {FormikHelpers} from 'formik';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {WPX} from '../../utils/responsiveness';

import {styles} from './styles';

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

  // Microsoft authentication requires the application ID to be added in Firebase Authentication provider.
  // Make sure to configure the Microsoft provider in Firebase console with the correct Application ID.
  // Also, update the tenant ID below for your organization's Azure AD (if applicable).

  // const handleMicrosoftSignIn = async () => {
  //   try {
  //     const provider = new auth.OAuthProvider('microsoft.com');
  //     provider.addScope('offline_access');
  //     provider.setCustomParameters({
  //       prompt: 'consent',
  //       tenant: 'tenant_name_or_id', // Replace with your tenant ID
  //     });

  //     await auth().signInWithRedirect(provider);
  //     console.log('Microsoft sign-in initiated');
  //   } catch (error: any) {
  //     Alert.alert('Error', error.message);
  //   }
  // };

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
      </View>
    </View>
  );
};
