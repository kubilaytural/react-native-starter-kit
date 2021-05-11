import { Alert } from 'react-native';
import { i18n } from 'resources';

// Width Percentage
function show(title, message, onPress = () => {}) {
  Alert.alert(i18n.t(title), i18n.t(message), [{ text: i18n.t('ok'), onPress }], {
    cancelable: false,
  });
}

function showMessage(title, message, onPress = () => {}, text = i18n.t('ok')) {
  Alert.alert(i18n.t(title), message, [{ text, onPress }], { cancelable: false });
}

function showQues(title, message, onPress = () => {}) {
  Alert.alert(
    i18n.t(title),
    i18n.t(message),
    [
      {
        text: i18n.t('cancel'),
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: i18n.t('confirm'), onPress },
    ],
    { cancelable: false },
  );
}

function showQuesMessage(title, message, onPress = () => {}) {
  Alert.alert(
    i18n.t(title),
    message,
    [
      {
        text: i18n.t('cancel'),
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: i18n.t('confirm'), onPress },
    ],
    { cancelable: false },
  );
}

export default {
  show,
  showMessage,
  showQuesMessage,
  showQues,
};
