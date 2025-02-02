import {StyleSheet} from 'react-native';
import {ColorPane} from '../../theme/colorScheme';
import { HPX } from '../../utils/responsiveness';

// Styles
export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 10,
    right: 5
  },
  input: {
    // width: '80%',
    color: 'white',
    marginBottom: 20,
    fontSize: 18,
    padding: 10,
  },
  inputContainer: {
    width: '88%',
    bottom: 20,
    left: 45,
    position: 'absolute',
    alignSelf: 'center',
  },
  errorContainer: {
    alignSelf: 'flex-end',
    marginRight: 5,       
    top: -HPX(18),      
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    textAlign: 'right',     
  },
});
