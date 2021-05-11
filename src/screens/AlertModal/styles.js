import { StyleSheet } from 'react-native';
import { colors } from 'resources';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#00000050',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginHorizontal: 25,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.borderColor,
  },
  touchableClose: {
    height: 22,
    width: 22,
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e0e0e0',
  },
  icClose: {
    height: 10,
    width: 10,
    tintColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content: {
    marginTop: 10,
  },
  footer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  cancelButton: {
    width: 90,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.borderColor,
    marginRight: 8,
  },
  okButton: {
    width: 90,
    borderRadius: 5,
    backgroundColor: colors.passerOrange,
  },
});

export default styles;
