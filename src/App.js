import React, { Component } from 'react';
import {
  Platform,
  Text,
  View,
  Button,
  TextInput,
  TouchableHighlight,
  TouchableNativeFeedback,
  Keyboard,
  BackHandler,
  FlatList,
  StatusBar
} from 'react-native';
import {
  createDrawerNavigator,
  createMaterialTopTabNavigator,
  createNavigator,
  createSwitchNavigator,
  createNavigationContainer
} from 'react-navigation';
import Messager from './Messager';
import cl from './colormap';

export default createMaterialTopTabNavigator(
  {
    Messages: Messager,
    Chats: Messager,
  }, {
    tabBarOptions: {
      activeTintColor: cl.foreground2,
      inactiveTintColor: cl.foreground,
      style: {
        backgroundColor: cl.background,
      },
      indicatorStyle: {
        backgroundColor: cl.foreground
      }
    }
  });

// export default class App extends Component {
//   render() {
//     return (
//       createTabNavigator({
//         messages: {
//           screen: Messager
//         }
//       })
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
