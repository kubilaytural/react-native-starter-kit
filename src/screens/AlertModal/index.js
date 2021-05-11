import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { TouchableOpacity, Image, Text, Button } from 'components';
import { alertModal } from 'utils';
import { colors } from 'resources';
import styles from './styles';

class AlertModal extends PureComponent {
  constructor(props) {
    super(props);

    this.onOk = this.onOk.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.dismissModal = this.dismissModal.bind(this);
  }

  onOk() {
    const { onOk } = this.props;
    if (onOk) onOk();
    alertModal.hide();
  }

  onCancel() {
    alertModal.hide();
  }

  dismissModal() {
    alertModal.hide();
  }

  render() {
    const {
      textObj: { type, title, description, text },
    } = this.props;

    let backgroundColor = 'white';
    let titleTextColor = colors.passerOrange; // 'passerRed2';
    let closeBackgroundColor = '#e0e0e0';
    let closeTintColor = 'white';
    if (type === 'orange') {
      backgroundColor = colors.passerOrange;
      titleTextColor = 'white';
      closeBackgroundColor = 'white';
      closeTintColor = colors.passerOrange;
    } else if (type === 'error') {
      titleTextColor = 'passerRed2';
    }

    return (
      <View style={styles.main}>
        <View style={[styles.container, { backgroundColor }]}>
          <View style={styles.header}>
            {description ? (
              <Text
                translation={description || 'error'}
                color={titleTextColor}
                size={13}
                weight="BOLD"
                style={{ lineHeight: 15.73, width: '85%' }}
              />
            ) : (
              <Text
                color={titleTextColor}
                size={13}
                weight="BOLD"
                style={{ lineHeight: 15.73, width: '85%' }}
              >
                {text}
              </Text>
            )}
            <TouchableOpacity onPress={this.onOk} style={{ padding: 5 }}>
              <View style={[styles.touchableClose, { backgroundColor: closeBackgroundColor }]}>
                <Image source="ic_cancel" style={[styles.icClose, { tintColor: closeTintColor }]} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

AlertModal.propTypes = {
  onOk: PropTypes.func,
  textObj: PropTypes.obj,
};

AlertModal.defaultProps = {
  onOk: null,
  textObj: {
    title: '',
    description: '',
    text: '',
  },
};

module.exports = AlertModal;
