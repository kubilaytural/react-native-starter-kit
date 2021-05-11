import React, { Component } from 'react';
import { View } from 'react-native';
import { Image, Text } from 'components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { navigation } from 'utils';
import styles from './styles';

class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    navigation.events().bindComponent(this);
  }

  componentDidMount() {}

  render() {
    const { isAddedProduct } = this.state;
    return (
      <View style={styles.container}>
        <Image source="img_dart" style={styles.dartImage} />
        <Text translation="appName" weight="MEDIUM" size={18} />
      </View>
    );
  }
}

HomeScreen.propTypes = {
  componentId: PropTypes.string,
};

HomeScreen.defaultProps = {
  componentId: '',
};

const mapStateToProps = ({}) => ({});
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps, null)(HomeScreen);
