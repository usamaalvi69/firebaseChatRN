import React, {useEffect} from 'react';
import {Pressable, Text, View} from 'react-native';
import {Formik} from 'formik';
import {validationSchema} from './validation';

import {AnimatedButton, Input} from '../../components';
import {STRINGS} from '../../utils/strings';
import {styles} from './styles';

interface FormProps {
  onSubmit: (values: any) => void;
  isSignUp: boolean;
  setIsSignUp: React.Dispatch<React.SetStateAction<boolean>>;
}
export const AuthForm: React.FC<FormProps> = ({
  onSubmit,
  isSignUp,
  setIsSignUp,
}) => {
  const toggleMode = () => {
    setIsSignUp(prevState => !prevState);
  };

  return (
    <Formik
      initialValues={{email: '', password: ''}}
      validationSchema={validationSchema}
      onSubmit={onSubmit}>
      {({handleSubmit, isSubmitting}) => (
        <>
          <Input
            name="email"
            placeholder={STRINGS.emailPlaceholder}
            icon="alternate-email"
          />
          <Input
            name="password"
            placeholder={STRINGS.passwordPlaceholder}
            icon="lock"
            secureTextEntry
          />

          <AnimatedButton
            isSignUp={isSignUp}
            isSubmitting={isSubmitting}
            handleSubmit={handleSubmit}
          />

          <View style={styles.toggle}>
            <Text style={styles.joinUs}>
              {isSignUp ? STRINGS.joinedText : STRINGS.alreadyJoinedText}
            </Text>
            <Pressable onPress={toggleMode}>
              <Text style={styles.authLabel}>
                {isSignUp ? STRINGS.loginText : STRINGS.signupText}
              </Text>
            </Pressable>
          </View>
        </>
      )}
    </Formik>
  );
};
