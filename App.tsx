import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './app/screens/Login';
import { IconComponentProvider } from '@react-native-material/core';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MainNavigator from './app/screens/Main';

import { LogBox } from 'react-native';

LogBox.ignoreLogs([/^AsyncStorage has been extracted from react-native.+/]);

const Stack = createNativeStackNavigator();

function App() {
  return (
    <IconComponentProvider IconComponent={MaterialCommunityIcons as any}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Main" component={MainNavigator} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </IconComponentProvider>
  );
}

export default App;