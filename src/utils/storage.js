import AsyncStorage from '@react-native-community/async-storage';

// Width Percentage
function getAccessToken() {
  return AsyncStorage.getItem('access_token');
}

function setAccessToken(token) {
  return AsyncStorage.setItem('access_token', token);
}

function getRefreshToken() {
  return AsyncStorage.getItem('refresh_token');
}

function setRefreshToken(token) {
  return AsyncStorage.setItem('refresh_token', token);
}

function getWalkthroughtVisible() {
  return AsyncStorage.getItem('walkthrought');
}

function setWalkthroughtVisible(isVisible) {
  return AsyncStorage.setItem('walkthrought', isVisible);
}

export default {
  getAccessToken,
  setAccessToken,
  getRefreshToken,
  setRefreshToken,
  getWalkthroughtVisible,
  setWalkthroughtVisible,
};
