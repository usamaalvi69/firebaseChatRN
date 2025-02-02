import React, {useState} from 'react';
import {View, TextInput, Text} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useFormikContext} from 'formik';
import {ColorPane} from '../../theme/colorScheme';
import {styles} from './styles';

interface InputProps {
  name: string;
  placeholder: string;
  icon: string;
  secureTextEntry?: boolean;
}

export const Input: React.FC<InputProps> = ({
  name,
  placeholder,
  icon,
  secureTextEntry,
}) => {
  const {values, handleChange, errors, touched, setFieldTouched} =
    useFormikContext<any>();
  const [isFocused, setIsFocused] = useState(false);

  return (
    <>
      <View style={styles.container}>
        <MaterialIcons
          size={25}
          color={isFocused ? ColorPane.bluish : ColorPane.placeHolder}
          style={{bottom: 12}}
          name={icon}
        />
        <View
          style={[
            styles.inputContainer,
            {
              height: isFocused ? 1.5 : 1,
              backgroundColor: isFocused
                ? ColorPane.bluish
                : ColorPane.placeHolder,
            },
          ]}
        />
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={values[name]}
          onChangeText={handleChange(name)}
          onBlur={() => {
            setIsFocused(false);
            setFieldTouched(name, true);
          }}
          onFocus={() => setIsFocused(true)}
          secureTextEntry={secureTextEntry}
        />
      </View>

      {touched[name] && errors[name] && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>
            {typeof errors[name] === 'string' ? errors[name] : ''}
          </Text>
        </View>
      )}
    </>
  );
};
