import React from 'react';
import {View, Text, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {createStyles} from './styles';
import {useTheme} from '@react-navigation/native';
import {capitalize} from '../../utils/helper';
import {AvatarInitial} from '../AvatarInitial/AvatarInitial';

interface HeaderProps {
  title: string;
  user: string;
  subTitle?: string;
  onPress: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  user,
  subTitle,
  onPress,
}) => {
  const {colors} = useTheme();
  const styles = createStyles(colors);

  // Get first initial
  // const initial = user ? user.charAt(0).toUpperCase() : '?';

  return (
    <View style={styles.header}>
      <Pressable style={styles.subContainer} onPress={onPress}>
        <Icon name="arrow-back" size={24} color="white" />
        <View style={{marginLeft: 10}}>
          <Text style={styles.txt}>{capitalize(title)}</Text>
          <Text style={styles.subtxt}>{subTitle}</Text>
        </View>
      </Pressable>

      <AvatarInitial name={user ?? ''} color="white"/>
    </View>
  );
};
