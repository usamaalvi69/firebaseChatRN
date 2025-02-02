import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { theme } from "../theme";
import { useColorScheme } from "react-native";

import { Chat, Login, Users } from "../screens";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { NAVIGATION } from "../constant/navigation";
import { MyStatusBar } from "../components";
import { ColorPane } from "../theme/colorScheme";

const Stack = createNativeStackNavigator();

const MainStack = () => {
  const scheme = useColorScheme() as "light" | "dark";

  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    // Subscribe to auth state changes
    const unsubscribe = auth().onAuthStateChanged(
      (authUser: FirebaseAuthTypes.User | null) => {
        setUser(authUser);
      }
    );

    // Cleanup function
    return () => unsubscribe();
  }, []);

  return (
    <NavigationContainer theme={theme[scheme]}>
      {user && (
        <MyStatusBar
          backgroundColor={ColorPane.midnight}
          barStyle="light-content"
        />
      )}
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {user ? (
          <>
            <Stack.Screen name={NAVIGATION.USERS} component={Users} />
            {/* @ts-ignore */}
            <Stack.Screen name={NAVIGATION.CHAT} component={Chat} />
          </>
        ) : (
          <Stack.Screen name={NAVIGATION.AUTH} component={Login} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
