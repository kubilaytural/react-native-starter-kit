import React from 'react';
import PropTypes from 'prop-types';
import TouchableOpacity from '../TouchableOpacity';
import Image from '../Image';
import styles from './styles';

const CheckBox = ({ isCheck, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    {isCheck ? (
      <Image source="ic_check" style={styles.circleIcon} />
    ) : (
      <Image style={styles.unCircleIcon} />
    )}
  </TouchableOpacity>
);

CheckBox.propTypes = {
  type: PropTypes.string,
  isCheck: PropTypes.bool,
  onPress: PropTypes.func,
};
CheckBox.defaultProps = {
  type: 'default',
  isCheck: false,
  onPress: null,
};

export default CheckBox;
