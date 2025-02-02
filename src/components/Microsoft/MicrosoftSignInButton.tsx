import React from 'react';
import {Pressable, Text, Image, StyleSheet, Alert} from 'react-native';
import {images} from '../../assets/images';
import {WPX} from '../../utils/responsiveness';
import {ColorPane} from '../../theme/colorScheme';

export const MicrosoftSignInButton: React.FC = () => {
  const showAlert = () => {
    Alert.alert(
      'Microsoft Login',
      'You are about to log in using your Microsoft account. Please follow the prompts in read me.',
      [{text: 'OK'}],
    );
  };
  return (
    <Pressable onPress={showAlert} style={styles.microsoftButton}>
      <Image
        resizeMode="contain"
        source={images.microSoft}
        style={styles.logo}
      />
      <Text style={styles.microsoftText}>Login with Microsoft</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  microsoftButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: WPX(40),
    paddingVertical: WPX(10),
    paddingHorizontal: WPX(20),
    backgroundColor: ColorPane.microsoft,
    borderRadius: 10,
    marginTop: 20,
  },
  logo: {
    height: WPX(35),
    width: WPX(35),
  },
  microsoftText: {
    color: 'white',
    fontSize: WPX(14),
    fontWeight: 'bold',
  },
});
