import { Navigation } from 'react-native-navigation';
import { i18n, images } from 'resources';
import storage from './storage';
import { startFromLogin } from '../index';

// Vars
let currentTabIndex = 0;
const didAppearListeners = {};

// Utilities
Navigation.isScreenVisible = (componentId) =>
  Navigation.store.getRefForId(componentId) != undefined;
Navigation.setTitle = (title) => ({ topBar: { title: { text: i18n.t(title) } } });
Navigation.setCloseButton = () => ({
  topBar: { leftButtons: [{ id: 'close', icon: images.icon_close }] },
});
Navigation.setRightButton = (id, icon) => ({ topBar: { rightButtons: [{ id, icon }] } });
Navigation.noHeader = () => ({ topBar: { visible: false, animate: true, drawBehind: true } });
Navigation.hideBottomTabs = () => ({ bottomTabs: { drawBehind: true } });

Navigation.showOverlayWithName = (name, props = {}, options = {}) =>
  Navigation.showOverlay({ component: { name, passProps: props, options } });
Navigation.showModalWithName = (name, props = {}, options = {}) =>
  Navigation.showModal({ component: { name, passProps: props, options } });
Navigation.showModalWithStack = (name, props = {}, options = {}) =>
  Navigation.showModal({
    stack: { children: [{ component: { name, passProps: props, options } }] },
  });
Navigation.pushWithName = (componentId, name, props = {}, options = {}) =>
  Navigation.push(componentId, { component: { name, passProps: props, options } });

Navigation.setSelectedTabIndex = (index) =>
  Navigation.mergeOptions('HomeScreen', { bottomTabs: { currentTabIndex: index } });

/* ********** LISTENERS ********** */
async function didAppear(rest) {
  const { componentId } = rest;
  const accessToken = await storage.getAccessToken();
  // if (
  //   !accessToken &&
  //   (componentId === 'ProfileScreen' ||
  //     componentId === 'OrderScreen' ||
  //     componentId === 'FavoriteScreen')
  // ) {
  //   Navigation.push(componentId, {
  //     component: { name: 'LoginScreen', passProps: {}, options: {} },
  //   });
  // }
  // Call the listener if exist
  if (didAppearListeners[componentId]) didAppearListeners[componentId]();
}
function didDisappear(componentId, componentName) {}

Navigation.events().registerComponentDidAppearListener(didAppear);

export default Navigation;
