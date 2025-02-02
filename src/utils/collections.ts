import database from '@react-native-firebase/database';
// database collections
export const COLLECTIONS = {
  USERS: 'users',
  MESSAGES: 'messages',
  CHATS: 'chats',
};

export const getMessagePath = (senderId: string, receiverId: string) => {
  return `/${COLLECTIONS.MESSAGES}/${senderId}/${receiverId}/${Date.now()}`;
};

export const updateLastMessage = async (
  senderId: string,
  receiverId: string,
  message: string,
) => {
  const lastMessageData = {
    lastMessage: message,
    lastMessageTime: database.ServerValue.TIMESTAMP,
  };

  try {
    await database()
      .ref(`/${COLLECTIONS.USERS}/${senderId}/${receiverId}`)
      .update(lastMessageData);
    await database()
      .ref(`/${COLLECTIONS.USERS}/${receiverId}/${senderId}`)
      .update(lastMessageData);
  } catch (error) {
    console.error('Error updating last message:', error);
  }
};
