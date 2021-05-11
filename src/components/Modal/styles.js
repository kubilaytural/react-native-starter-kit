import { StyleSheet } from 'react-native';
import { dimens, colors } from 'resources';

const styles = StyleSheet.create({
  modal: {
    marginHorizontal: 0, // Full Width
    marginVertical: 0, // Full Height
  },
  content: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    // alignItems: 'center',
  },
  // CloseButton
  touchableClose: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 10,
  },
  icClose: { tintColor: 'white' },

  safeAreaView: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.white,
  },
});

export default styles;
