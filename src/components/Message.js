import React from 'react';
import {
  TouchableNativeFeedback,
  View,
  Text,
  Animated,
  Modal
} from 'react-native';
import styles, { foreColor } from '../styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Menu from './Menu';

export default class Message extends React.Component {
  constructor(props) {
    super(props);
    const bigRadius = 10;
    const smallRadius = 2;
    this.state = {
      borderConfig: {
        alignLeft: {
          borderTopLeftRadius: smallRadius,
          borderTopRightRadius: bigRadius,
          borderBottomLeftRadius: bigRadius,
          borderBottomRightRadius: bigRadius,
        },
        alignRight: {
          borderTopLeftRadius: bigRadius,
          borderTopRightRadius: smallRadius,
          borderBottomLeftRadius: bigRadius,
          borderBottomRightRadius: bigRadius,
        }
      },
      anim: new Animated.Value(0),
    };
  }

  componentDidMount() {
    Animated.timing(this.state.anim,
      { toValue: 1, duration: 200 }).start();
  }

  render() {
    return (
      <View style={styles.messageContainer}>
        <Animated.View
          style={
            {
              ...styles.messageBox,
              ...(this.props.align === 'right' ?
                this.state.borderConfig.alignRight :
                this.state.borderConfig.alignLeft),
              opacity: this.state.anim,
              transform: [
                { scaleX: this.state.anim },
                { scaleY: this.state.anim }]
            }}
          alignSelf={
            this.props.align === 'right' ?
              'flex-end' : 'flex-start'
          }
          onTouchEnd={() => {
            this.menu.show()
          }}
        >
          <Text>{this.props.messageText}</Text>
        </Animated.View>

        <Menu
          ref={c => this.menu = c}
          items={[
            { text: 'delete', void: this.props.deleteCallback },
          ]}
        />

      </View >
    )
  }
}
