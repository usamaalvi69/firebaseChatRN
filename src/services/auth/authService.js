import auth from '@react-native-firebase/auth';
import {login} from '../../redux/auth/authSlice';
import database from "@react-native-firebase/database";

/**
 * Sign up a new user with email and password
 */
export const signUp = async (email, password) => {
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(email, password);
      const user = userCredential.user; // Extract user from userCredential
  
      const username = email.split('@')[0]; // Extract username from email
  
      // Store user details in Firebase Realtime Database
      await database().ref(`/users/${user.uid}`).set({
        uid: user.uid,
        name: username,
        email: user.email,
        createdAt: database.ServerValue.TIMESTAMP,
      });
  
      return user; // Return user object
    } catch (error) {
      throw error;
    }
  };

/**
 * Sign in an existing user with email and password
 */
export const signIn = async (email, password, dispatch) => {
  try {
    const {user} = await auth().signInWithEmailAndPassword(email, password);
    // const user = userCredential.user;
    dispatch(login({uid: user.uid, email: user.email}));
    return user;
  } catch (error) {
    throw error;
  }
};

/**
 * Sign out the current user
 */
export const signOut = async () => {
  try {
    await auth().signOut();
  } catch (error) {
    throw error;
  }
};

/**
 * Get the currently authenticated user
 */
export const getCurrentUser = () => {
  return auth().currentUser;
};
