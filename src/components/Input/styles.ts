import {StyleSheet} from 'react-native';
import {ColorPane} from '../../theme/colorScheme';

// Styles
export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    width: '100%',
  },
  input: {
    width: '85%',
    marginBottom: 20,
    fontSize: 16,
    padding: 10,
  },
  inputContainer: {
    width: '82%',
    bottom: 20,
    left: 45,
    position: 'absolute',
    alignSelf: 'center',
  },
  errorContainer: {
    alignSelf: 'flex-end',
    marginRight: 25,       
    marginTop: -12,      
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    textAlign: 'right',     
  },
});
