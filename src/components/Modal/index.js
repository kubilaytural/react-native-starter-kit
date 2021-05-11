import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Modal from 'react-native-modal';
import TouchableOpacity from '../TouchableOpacity';
import Image from '../Image';
import styles from './styles';

class MyModal extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { isVisible: false };

    // Functions
    this.dismissModal = this.dismissModal.bind(this);
  }

  showModal() {
    this.setState({ isVisible: true });
  }

  dismissModal() {
    this.setState({ isVisible: false });
  }

  render() {
    const { children, style } = this.props;
    const { isVisible } = this.state;

    return (
      <Modal isVisible={isVisible} style={[styles.modal, style]}>
        <View style={styles.content}>
          {children}
          <TouchableOpacity style={styles.touchableClose} onPress={this.dismissModal}>
            <Image source="ic_cancel" style={styles.icClose} />
          </TouchableOpacity>
        </View>
        <View style={styles.safeAreaView} />
      </Modal>
    );
  }
}

MyModal.propTypes = {
  children: PropTypes.array,
};

MyModal.defaultProps = {
  children: [],
};

module.exports = MyModal;
