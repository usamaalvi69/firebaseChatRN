//chatHelpers.ts

import database from '@react-native-firebase/database';
import {useFocusEffect} from '@react-navigation/native';
import {useCallback} from 'react';

import {IMessage} from 'react-native-gifted-chat';

import {COLLECTIONS, updateLastMessage} from '../../utils/collections';
import {FirebaseMessage} from './types';
import {setLastMessage} from '../../redux/chat/chatSlice';

// Function to listen for messages
export const useMessageListener = (
  ref: any,
  setMessages: (messages: IMessage[]) => void,
) => {
  useFocusEffect(
    useCallback(() => {
      const handleSnapshot = (snapshot: any) => {
        const vals = snapshot.val();
        if (!vals) {
          setMessages([]);
          return;
        }

        const parsedMessages: IMessage[] = Object.entries(vals)
          .map(([key, value]) => ({
            _id: key,
            text: (value as FirebaseMessage).message,
            createdAt: (value as FirebaseMessage).time,
            user: {
              _id: (value as FirebaseMessage).senderId,
              name: (value as FirebaseMessage).senderName,
            },
          }))
          .sort((a, b) => b.createdAt - a.createdAt);

        setMessages(parsedMessages);
      };

      ref.orderByChild('time').limitToLast(50).on('value', handleSnapshot);
      return () => ref.off('value', handleSnapshot);
    }, [ref]),
  );
};

// Function to send messages
export const sendMessage = async (
  text: string,
  id: string,
  receiverUid: string,
  username: string,
  dispatch: any,
) => {
  if (!text) return;

  const timestamp = Date.now();

  const messageData: FirebaseMessage = {
    senderName: username,
    senderId: id.toString(),
    message: text,
    seen: false,
    time: database.ServerValue.TIMESTAMP as unknown as number,
  };

  const senderRef = `/${COLLECTIONS.MESSAGES}/${id}/${receiverUid}/${timestamp}`;
  const receiverRef = `/${COLLECTIONS.MESSAGES}/${receiverUid}/${id}/${timestamp}`;

  try {
    await Promise.all([
      database().ref(senderRef).set(messageData),
      database().ref(receiverRef).set(messageData),
    ]);

    await updateLastMessage(id, receiverUid, text.slice(0, 30));
    dispatch(setLastMessage({lastMessage: text.slice(0, 30)}));
  } catch (error) {
    console.error('Error sending message:', error);
  }
};

