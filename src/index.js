import { Platform } from 'react-native';
import { Navigation } from 'react-native-navigation';
import registerScreens from './screens';
import { images, colors, fonts, i18n } from 'resources';
import { storage } from 'utils';
import { Provider } from 'react-redux';
import store from './redux/store';

export function startFromLogin() {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'HomeScreen',
            },
          },
        ],
        options: {
          // backgroundImage: images.login_background,
        },
      },
    },
  });
}

export default async function startApp() {
  registerScreens(store, Provider);
  Navigation.setDefaultOptions({
    statusBar: {
      backgroundColor: colors.backgroundColor,
    },
    layout: {
      backgroundColor: colors.backgroundColor,
      orientation: ['portrait'],
    },
    topBar: {
      visible: true,
      drawBehind: false,
      title: {
        color: colors.descriptionColor,
        fontSize: 25,
        alignment: 'center',
        fontFamily: fonts.primary.BOLD,
      },
      background: {
        color: colors.backgroundColor,
      },
      noBorder: true,
      borderHeight: 0,
      elevation: 0, // fix android border
      backButton: {
        icon: Platform.OS === 'ios' ? images.ic_back2 : images.ic_back,
        showTitle: false,
        color: colors.black,
      },
      buttonColor: 'white',
    },
    overlay: {
      interceptTouchOutside: true,
    },
    bottomTabs: {
      animate: true,
      hideShadow: false,
      backgroundColor: colors.white,
      titleDisplayMode: 'alwaysShow',
    },
    bottomTab: {
      fontFamily: fonts.primary.MEDIUM,
      fontSize: 9,
      selectedFontSize: 9,
      selectedIconColor: colors.passerOrange,
      selectedTextColor: colors.passerOrange,
      iconColor: colors.passerGray,
      textColor: colors.passerGray,
      badgeColor: colors.passerOrange,
    },
  });

  Navigation.events().registerAppLaunchedListener(async () => {
    const accessToken = await storage.getAccessToken();

    if (accessToken) {
      startFromLogin();
    } else {
      startFromLogin();
      // startFromLogin();
    }
  });
}
