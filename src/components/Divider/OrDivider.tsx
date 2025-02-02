import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ColorPane} from '../../theme/colorScheme';
import {WPX} from '../../utils/responsiveness';

export const OrDivider: React.FC = () => {
  return (
    <View style={styles.orContainer}>
      <View style={styles.line} />
      <Text style={styles.orText}>OR</Text>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 20,
  },
  line: {
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
});
