import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { colors, i18n, fonts } from 'resources';
import styles from './styles';

function myColors({ color }) {
  if (!color) return colors.textInputText;

  return colors[color];
}

function fontSize({ type, size }) {
  if (!type && !size) return 14;
  // if you pass size prop, it has priority over type prop.
  if (size) return size;

  return {
    TITLE: 18,
    CAPTION: 10,
  }[type];
}

function fontWeight({ weight }) {
  if (!weight) return fonts.primary.REGULAR;

  return fonts.primary[weight] || fonts.primary.REGULAR;
}

class MyText extends PureComponent {
  constructor(props) {
    super(props);

    this.inlineStyle = { ...styles.title }; // Immutable
    this.inlineStyle.fontSize = fontSize(props);
    this.inlineStyle.fontFamily = fontWeight(props);

    // Functions
    this.renderText = this.renderText.bind(this);
  }

  renderText() {
    const { translation, translationData, children } = this.props;

    if (!translation) return children;

    return i18n.t(translation, translationData);
  }

  render() {
    const { style } = this.props;
    return (
      <Text {...this.props} style={[style, this.inlineStyle, { color: myColors(this.props) }]}>
        {this.renderText()}
      </Text>
    );
  }
}

MyText.propTypes = {
  translation: PropTypes.string,
  translationData: PropTypes.object,
};

MyText.defaultProps = {
  translation: null,
  translationData: {},
};

export default MyText;
