import React from 'react';
import PropTypes from 'prop-types';
import TouchableOpacity from '../TouchableOpacity';
import Text from '../Text';
import Image from '../Image';
import styles from './styles';

const Button = ({
  textColor,
  weight,
  translation,
  style,
  textSize,
  onPress,
  children,
  leftIcon,
  leftIconStyle,
  disabled,
}) => (
  <TouchableOpacity disabled={disabled} style={[styles.container, style]} onPress={onPress}>
    {leftIcon && <Image source={leftIcon} style={[styles.leftIcon, leftIconStyle]} />}
    <Text size={textSize} color={textColor} weight={weight} translation={translation}>
      {children}
    </Text>
  </TouchableOpacity>
);

Button.propTypes = {
  textColor: PropTypes.string,
  weight: PropTypes.string,
  translation: PropTypes.string,
  onPress: PropTypes.func,
  textSize: PropTypes.number,
  style: PropTypes.any,
  disabled: PropTypes.bool,
};
Button.defaultProps = {
  textColor: 'primary',
  weight: 'MEDIUM',
  translation: '',
  onPress: () => {},
  textSize: 14,
  style: [],
  disabled: false,
};

export default Button;
