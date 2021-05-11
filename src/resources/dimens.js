import { Platform, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export default {
  // UI Dimens
  screenPaddingHorizontal: 20,
  circleRadius: 30,
  navbar: Platform.select({
    ios: {
      height: height === 812 || width === 812 ? 113 : 95,
    },
    android: {
      height: 54,
    },
  }),
};
