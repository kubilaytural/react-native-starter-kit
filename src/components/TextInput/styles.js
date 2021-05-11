import { StyleSheet } from 'react-native';
import { fonts } from 'resources';
import colors from '../../resources/colors';

const styles = StyleSheet.create({
  // TextInput Style
  container: {},
  input: {
    fontSize: 16,
    color: colors.textInputText,
    borderColor: colors.borderColor,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius: 4,
    marginTop: 4,
    fontFamily: fonts.primary.REGULAR,
  },
  touchableEye: { position: 'absolute', top: 30, right: 10 },
  eye: {
    tintColor: '#E0E0E0',
  },
});

export default styles;
