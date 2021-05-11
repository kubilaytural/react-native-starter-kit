import React, { Component } from 'react';
import ScalableText from 'react-native-text';

export default class Icon extends Component {
  render() {
    const { type, font, style } = this.props;
    return <ScalableText style={[style, { fontFamily: font }]}>{type}</ScalableText>;
  }
}
