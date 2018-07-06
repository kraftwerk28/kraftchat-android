import React, { Component } from 'react';
import {
  Platform,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  TouchableNativeFeedback,
  Keyboard,
  BackHandler,
  FlatList,
  StatusBar
} from 'react-native';
import { } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles, { foreColor } from './styles';
import Message from './components/Message';
import cl from './colormap';

export default class Messager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curMessage: '',
      messages: new Array()
    };
    this.msgInput = React.createRef()
  }

  deleteMessage(i) {
    const { messages } = this.state;
    const m = messages.slice();
    m.splice(i, 1);
    this.setState({
      messages: m
    });
  }

  submitMessage() {
    if (this.state.curMessage.length > 0) {
      const { messages, curMessage } = this.state;
      const _messages = messages.slice();
      _messages.push({ message: curMessage });
      // Keyboard.dismiss();
      this.msgInput.setNativeProps({ text: '' });
      this.setState({
        messages: _messages,
        curMessage: ''
      });
      this.flatList.scrollToEnd({ animated: true });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={cl.background} barStyle='light-content' />
        <View style={styles.messages}>
          <FlatList
            data={this.state.messages}
            renderItem={({ item, index }) => {
              return (
                <Message
                  messageText={item.message} align='right'
                  deleteCallback={this.deleteMessage.bind(this, index)}
                />
              )
            }}
            ref={c => this.flatList = c}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <View style={styles.bottom}>
          <TextInput
            style={styles.messageInput}
            ref={component => this.msgInput = component}
            placeholder='message...'
            minHeight='100%'
            placeholderTextColor={cl.foreground}
            onChangeText={(text) => {
              this.setState({
                curMessage: text
              })
            }}
            selectionColor={cl.foreground2}
          />
          <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple('#FFF', true)}
            onPressIn={this.submitMessage.bind(this)}
          >
            <View
              style={styles.sendBtn}>
              <Icon name='send' size={40} color='#0F0' style={{ alignSelf: 'center' }} />
            </View>
          </TouchableNativeFeedback>
        </View >
      </View >
    );
  }
}