import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import { images } from 'resources';
import FastImage from 'react-native-fast-image';

class MyImageComponent extends PureComponent {
  render() {
    const {
      uri, // Image Url
      source, // Local Image
      fast, // FastImage props // (if true return FastImage library)
      style, // Image Style
    } = this.props;
    const mySource = uri ? { uri } : images[source] || null;
    const MyImage = fast ? FastImage : Image;
    return <MyImage {...this.props} source={mySource} style={style} />;
  }
}

MyImageComponent.propTypes = {
  fast: PropTypes.bool,
  uri: PropTypes.string,
  source: PropTypes.string,
};

MyImageComponent.defaultProps = {
  fast: false,
  uri: null,
  source: '',
};

export default MyImageComponent;
