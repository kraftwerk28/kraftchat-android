import React from 'react';
import {
  View,
  TouchableNativeFeedback,
  StyleSheet,
  Text,
  ScrollView,
  Modal,
  Button
} from 'react-native';
import cl from '../colormap';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  view: {
    backgroundColor: cl.background,
    borderColor: cl.foreground,
    borderWidth: 3,
    borderRadius: 5,
    paddingBottom: 5,
    paddingTop: 5,
    width: '80%'
  },
  item: {
    padding: 5,
  },
  text: {
    fontSize: 20,
    color: cl.foreground,
    textAlign: 'center'
  }
});

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowing: false
    };
  }

  componentDidMount() {
    this.setState({
      isShowing: false
    })
  }

  show() {
    this.setState({
      isShowing: true
    });
  }

  hide() {
    this.setState({
      isShowing: false
    });
  }

  render() {
    return (
      <Modal
        visible={this.state.isShowing}
        transparent
        animationType='fade'
        onRequestClose={() => { this.hide() }}
        presentationStyle='overFullScreen'
      >
        <View
          style={styles.root}
          onTouchStart={(() => { this.hide() }).bind(this)}
        >
          <View
            style={styles.view}
            onTouchStart={(e) => { e.stopPropagation() }}
          >
            {this.props.items.map((item, i) =>
              <TouchableNativeFeedback
                key={i}
                background={TouchableNativeFeedback
                  .Ripple(cl.foreground2, false)}
                onPress={item.void.bind(this)}
              >
                <View style={styles.item}>
                  <Text style={styles.text}>{item.text}</Text>
                </View>
              </TouchableNativeFeedback>
            )}
          </View>
        </View>
      </Modal>
    )
  }
}


