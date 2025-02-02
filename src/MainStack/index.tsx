import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { theme } from "../theme";
import { useColorScheme } from "react-native";

import { Chat, Login, Users } from "../screens";

import { NAVIGATION } from "../constant/navigation";

const Stack = createNativeStackNavigator();

const MainStack = () => {
  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={theme[scheme]}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={NAVIGATION.AUTH} component={Login} />
        <Stack.Screen name={NAVIGATION.USERS} component={Users} />
        <Stack.Screen name={NAVIGATION.CHAT} component={Chat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
