import React from 'react';
import { Navigation } from 'react-native-navigation';
import HomeScreen from './HomeScreen';
import PlaygroundScreen from './PlaygroundScreen';

export default function registerScreens(store = null, Provider = null) {
  Navigation.registerComponent(
    'HomeScreen',
    () => (props) =>
      (
        <Provider store={store}>
          <HomeScreen {...props} />
        </Provider>
      ),
    () => HomeScreen,
  );
  Navigation.registerComponent('PlaygroundScreen', () => PlaygroundScreen);
}
