import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'components';

class PlaygroundScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View style={{ backgroundColor: 'blue' }}>
        <Text>Hello World!</Text>
      </View>
    );
  }
}

PlaygroundScreen.propTypes = {};

PlaygroundScreen.defaultProps = {};

export default PlaygroundScreen;
