import {Image, Text, View} from 'react-native';
import {styles} from './styles';
import {images} from '../../assets/images';
import {capitalize} from '../../utils/helper';
import { ColorPane } from '../../theme/colorScheme';

interface AvatarInitialProps {
  name: string;
  color?: string
}

export const AvatarInitial: React.FC<AvatarInitialProps> = ({name, color}) => {
  name = name.split('@')[0];

  return (
    <View style={styles.center}>
      <Image
        resizeMode="contain"
        source={images.profileImg}
        style={styles.profile}
      />

      <Text style={[styles.avatarText,{color: color}]}>{capitalize(name)}</Text>
    </View>
  );
};
