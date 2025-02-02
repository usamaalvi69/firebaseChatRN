import {View, Text, FlatList, SafeAreaView, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import database from '@react-native-firebase/database';
import {createStyles} from './styles';
import {capitalize, formatTime, nameColor} from '../../utils/helper';
import auth from '@react-native-firebase/auth';
import {getCurrentUser, signOut} from '../../services/auth/authService';
import {STRINGS} from '../../utils/strings';
import {useSelector} from 'react-redux';
import {COLLECTIONS} from '../../utils/collections';
import {NAVIGATION} from '../../constant/navigation';
import {AvatarInitial, Btn} from '../../components';
import {ColorPane} from '../../theme/colorScheme';

interface User {
  uid: string;
  name: string;
  email: string;
}

interface UsersProps {
  navigation: any;
}
interface RootState {
  lastMessage: {
    lastMessage: string;
  };
}

export const Users: React.FC<UsersProps> = ({navigation}) => {
  const [users, setUsers] = useState<User[]>([]);
  const styles = createStyles();
  const currentUser = getCurrentUser();
  const {lastMessage} = useSelector((state: RootState) => state.lastMessage);

  useEffect(() => {
    fetchUsers();
  }, [lastMessage]);

  async function fetchUsers() {
    try {
      const snapshot = await database()
        .ref(`/${COLLECTIONS.USERS}`)
        .once('value');
      if (snapshot.exists()) {
        const usersData = snapshot.val();
        const usersList = Object.values(usersData);

        // Filter out the current user based on their UID
        const filteredUsers = currentUser
          ? usersList.filter((user: any) => user.uid !== currentUser.uid)
          : [];

        setUsers(filteredUsers as any);
      }
    } catch (error) {
      // @ts-ignore
      console.error('Error fetching users:', error.message);
    }
  }

  const initial = currentUser?.email?.charAt(0).toUpperCase() || '';

  const userChat = (user: User) => {
    navigation.navigate(NAVIGATION.CHAT, {otherUser: user});
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: ColorPane.darkish}}>
      <View style={styles.header}>
        <Text style={styles.title}>{STRINGS.HEADER_TITLE}</Text>
        <AvatarInitial name={currentUser?.email ?? ''} color="white" />
      </View>

      <FlatList
        data={users}
        style={styles.list}
        keyExtractor={item => item.uid}
        renderItem={({item}) => {
          // @ts-ignore
          const lastMsg = item[currentUser?.uid]?.lastMessage;
          // @ts-ignore
          const lastMsgTime = item[currentUser?.uid]?.lastMessageTime;

          return (
            <Pressable style={styles.usersList} onPress={() => userChat(item)}>
              <View style={styles.row}>
                <View
                  style={[
                    styles.initials,
                    {backgroundColor: nameColor(item.name)},
                  ]}>
                  <Text style={{color: '#fff', fontSize: 18}}>
                    {item?.name?.charAt(0)?.toUpperCase()}
                  </Text>
                </View>
                <View>
                  <Text style={styles.name}>{capitalize(item?.name)}</Text>

                  <Text numberOfLines={1} style={{color: 'gray'}}>
                    {lastMsg ? `${lastMsg}..` : item.email}
                  </Text>
                </View>
              </View>
              {lastMsg ? (
                <Text style={styles.lastMsg}>{formatTime(lastMsgTime)}</Text>
              ) : (
                <View style={styles.buffer} />
              )}
            </Pressable>
          );
        }}
      />
      <Btn label={STRINGS.SIGN_OUT} onPress={signOut} style={styles.logout} />
    </SafeAreaView>
  );
};
