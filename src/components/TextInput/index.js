import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextInput, View } from 'react-native';
import { i18n, colors } from 'resources';
import Text from '../Text';
import Image from '../Image';
import TouchableOpacity from '../TouchableOpacity';
import styles from './styles';

class MyTextInput extends Component {
  constructor(props) {
    super(props);

    const { color, editable } = props;

    this.state = { text: '', isEye: false, validationError: false };

    this.inlineStyle = { ...styles.input };

    // Props olarak colors gelirse ve lokalde kayıtlı ise color style'a dahil edilir.
    if (color && color in colors) this.inlineStyle.color = colors[color];
    if (!editable) this.inlineStyle.opacity = 0.5;

    // Functions
    this.onChangeText = this.onChangeText.bind(this);
    this.onEye = this.onEye.bind(this);
    this.getText = this.getText.bind(this);
  }

  onChangeText(text) {
    const { validationError } = this.state;
    this.setState({ text });
    if (validationError && text.length) {
      this.validateInput(false);
    }
    this.props.onChangeText(text);
  }

  onEye() {
    this.setState((prevState) => ({
      isEye: !prevState.isEye,
    }));
  }

  getText() {
    // Component dışı value değerini almak için kullanılır.
    const { text } = this.state;
    if (!text) this.validateInput(true);
    return text ? text.trim() : text; // Text null değilse trim edilip gönderilir. Null'sa mevcut değer gönderilir.
  }

  validateInput(error) {
    this.setState({ validationError: error });
  }

  setText(text) {
    this.setState({ text });
  } // Component dışı value atamak için kullanılır.

  // Component dışı input value'su bu fonksiyon ile temizlenebilir.
  clear() {
    this.props.onChangeText('');
    this.textInput.clear();
  }

  focus() {
    try {
      this.textInput.focus();
    } catch (error) {
      console.log('textInputFocus error', error);
    }
  }

  renderTitle() {
    const { placeholder } = this.props;

    return (
      <Text translation={placeholder} size={13} color="descriptionColor" style={styles.title} />
    );
  }

  renderErrorMessage() {
    const { errorMessage } = this.props;

    return <Text translation={errorMessage} size={13} color="passerRed2" style={styles.title} />;
  }

  render() {
    const {
      placeholder,
      style,
      editable,
      secureTextEntry,
      keyboardType,
      maxLength,
      returnKeyType,
      multiline,
      textinputStyle,
      pointerEvents,
      errorMessage,
    } = this.props;
    const { text, isEye, validationError } = this.state;
    const eyeImage = isEye ? 'ic_openEye' : 'ic_closeEye';
    let secureText = false;
    if (secureTextEntry) {
      secureText = isEye ? false : true;
    }

    const placeholderText = placeholder ? i18n.t(placeholder) : '';
    let validateStyle = {};

    if (errorMessage && validationError) {
      validateStyle.borderColor = colors.passerRed2;
      validateStyle.color = colors.passerRed2;
    }

    return (
      <View style={[styles.container, style]}>
        {this.renderTitle()}
        <TextInput
          ref={(inputRef) => {
            this.textInput = inputRef;
          }}
          pointerEvents={pointerEvents}
          underlineColorAndroid="transparent"
          onChangeText={this.onChangeText}
          value={text}
          // placeholder={placeholderText}
          // placeholderTextColor={colors.placeholder_color}
          accessible
          focusable // accesiblity, only android
          accessibilityLabel={placeholderText}
          editable={editable}
          maxLength={maxLength}
          keyboardType={keyboardType}
          secureTextEntry={secureText}
          returnKeyType={returnKeyType}
          returnKeyLabel="previous"
          style={[this.inlineStyle, textinputStyle, validateStyle]}
          multiline={multiline}
        />
        {secureTextEntry && (
          <TouchableOpacity onPress={this.onEye} style={styles.touchableEye}>
            <Image source={eyeImage} style={styles.eye} />
          </TouchableOpacity>
        )}
        {validationError && this.renderErrorMessage()}
      </View>
    );
  }
}

MyTextInput.propTypes = {
  onChangeText: PropTypes.func,
  placeholder: PropTypes.string,
  style: PropTypes.any,
  color: PropTypes.string,
  editable: PropTypes.bool,
  secureTextEntry: PropTypes.bool,
  keyboardType: PropTypes.string,
  maxLength: PropTypes.number,
  returnKeyType: PropTypes.string,
  returnKeyLabel: PropTypes.string,
  multiline: PropTypes.bool,
};
MyTextInput.defaultProps = {
  onChangeText: () => {},
  placeholder: '',
  style: null,
  color: 'main_text_color',
  editable: true,
  secureTextEntry: false,
  keyboardType: 'default',
  maxLength: 100,
  returnKeyType: 'done',
  returnKeyLabel: 'done',
  multiline: false,
};

export default MyTextInput;
