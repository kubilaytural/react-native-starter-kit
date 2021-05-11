import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { fontTypes } from 'resources';
import PureIcon from 'utils/icon';

const { Icon, glypyMapMaker } = PureIcon;
const glypy = glypyMapMaker(fontTypes);

class MyIcon extends PureComponent {
  render() {
    const { type } = this.props;
    if (!type) return <View />;
    return <Icon {...this.props} type={glypy[type]} font="icomoon" />;
  }
}

module.exports = MyIcon;
