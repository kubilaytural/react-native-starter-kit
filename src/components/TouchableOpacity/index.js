import React from 'react';
import { TouchableOpacity } from 'react-native';

const MyTouchableOpacity = (props) => (
  <TouchableOpacity {...props} activeOpacity={0.8}>
    {props.children}
  </TouchableOpacity>
);

MyTouchableOpacity.propTypes = {};
MyTouchableOpacity.defaultProps = {};

export default MyTouchableOpacity;
