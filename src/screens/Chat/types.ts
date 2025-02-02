export interface User {
  uid?: any;
  _id: string;
  name: string;
}

export interface Message {
  _id: string;
  text: string;
  createdAt: number;
  user: User;
}

export interface ChatScreenProps {
  route: {params: {otherUser: {name: string; uid: string}}};
  navigation: any;
}
export interface ChatState {
  inverted: boolean;
  step: number;
  messages: Message[];
  loadEarlier: boolean;
  typingText: string | null;
  isLoadingEarlier: boolean;
  appIsReady: boolean;
  isTyping: boolean;
}

export interface Colors {
  primary: string;
  secondary: string;
  background: string;
  bubbleLeft: string;
  bubbleRight: string;
  textPrimary: string;
  textSecondary: string;
}
export interface FirebaseMessage {
  senderName: string;
  senderId: string;
  message: string;
  seen: boolean;
  time: number;
}