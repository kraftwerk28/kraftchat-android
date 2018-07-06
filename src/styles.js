import { StyleSheet } from 'react-native';
import cl from './colormap';

export const foreColor = '#0F0';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: cl.background,
  },
  bottom: {
    borderTopWidth: 3,
    borderTopColor: foreColor,
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
    maxHeight: 50,
    minHeight: 50,
    color: cl.foreground,
  },
  messages: {
    alignItems: 'flex-start',
    flex: 9,
  },
  messageInput: {
    flex: 1,
    height: '100%',
    color: cl.foreground2,
    fontFamily: 'RobotoMono-Regular',
    textAlignVertical: 'center'
  },
  sendBtn: {
    flex: 0,
  },
  messageContainer: {
    minWidth: '100%',
    alignSelf: 'stretch',
  },
  messageBox: {
    backgroundColor: cl.messageBubble,
    padding: 10,
    margin: 10,
  },
})
