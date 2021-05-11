import { Platform } from 'react-native';

const fonts = Platform.select({
  ios: {
    primary: {
      REGULAR: 'Inter-Regular',
      MEDIUM: 'Inter-Medium',
      BOLD: 'Inter-Bold',
    },
  },
  android: {
    primary: {
      REGULAR: 'Inter-Regular',
      MEDIUM: 'Inter-Medium',
      BOLD: 'Inter-Bold',
    },
  },
});

export default fonts;
