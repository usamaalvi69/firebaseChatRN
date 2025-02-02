import React, {useCallback, useState} from 'react';
import {SafeAreaView, Platform} from 'react-native';
import {
  GiftedChat,
  InputToolbar,
  Composer,
  Send,
  Bubble,
  IMessage,
} from 'react-native-gifted-chat';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import {Header} from '../../components';
import {ChatScreenProps} from './types';
import {styles} from './styles';
import {ColorPane} from '../../theme/colorScheme';
import {sendMessage, useMessageListener} from './chatHelpers';
import {COLLECTIONS} from '../../utils/collections';
import {STRINGS} from '../../utils/strings';

export const Chat: React.FC<ChatScreenProps> = () => {
  const {goBack} = useNavigation();
  const route = useRoute();
  // @ts-ignore
  const receiver = route.params.otherUser;
  let currentUser = useSelector((state: any) => state.auth.user);
  currentUser = currentUser ?? auth().currentUser;
  const {uid: id, email} = currentUser;
  let username = email?.split('@')[0];

  const [messages, setMessages] = useState<IMessage[]>([]);
  const dispatch = useDispatch();

  const ref = database().ref(`/${COLLECTIONS.MESSAGES}/${id}/${receiver?.uid}`);

  //   message listening hook
  useMessageListener(ref, setMessages);

  //  extracted function for sending messages
  const onSend = useCallback(
    (newMessages: IMessage[] = []) => {
      if (newMessages.length > 0) {
        sendMessage(newMessages[0].text, id, receiver?.uid, username, dispatch);
      }
    },
    [id, receiver?.uid, username, dispatch],
  );

  const renderBubble = (props: any) => (
    <Bubble
      {...props}
      wrapperStyle={{
        right: {backgroundColor: ColorPane.sender},
        left: {backgroundColor: ColorPane.receiver},
      }}
      textStyle={{
        right: {color: ColorPane.white},
        left: {color: ColorPane.white},
      }}
    />
  );

  const renderSend = (props: any) => (
    <Send {...props} containerStyle={styles.sendIcon}>
      <MaterialIcons size={30} color={ColorPane.parrot} name={'send'} />
    </Send>
  );

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: ColorPane.darkish}]}>
      <Header
        title={receiver.name}
        user={username}
        subTitle={STRINGS.ONLINE}
        onPress={goBack}
      />
      <GiftedChat
        messages={messages}
        onSend={onSend}
        renderSend={renderSend}
        user={{_id: id, name: username}}
        scrollToBottom
        renderInputToolbar={props => (
          <InputToolbar {...props} containerStyle={styles.toolBar} />
        )}
        renderComposer={props => (
          <Composer {...props} textInputStyle={styles.composer} />
        )}
        renderAvatar={() => null}
        keyboardShouldPersistTaps="never"
        renderBubble={renderBubble}
        quickReplyStyle={{borderRadius: 2}}
        inverted={Platform.OS !== 'web'}
        timeTextStyle={{
          left: {color: ColorPane.white},
          right: {color: ColorPane.white},
        }}
        infiniteScroll
      />
    </SafeAreaView>
  );
};
