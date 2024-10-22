import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Capture from './screens/Capture';  // Import Capture screen
import * as SplashScreen from 'expo-splash-screen'; // Import SplashScreen

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const prepare = async () => {
      // Keep the splash screen visible while we fetch resources
      await SplashScreen.preventAutoHideAsync();
      // Simulate a loading time
      setTimeout(async () => {
        setIsLoading(false);
        await SplashScreen.hideAsync();
      }, 3000); // Change this duration as needed
    };

    prepare();
  }, []);

  if (isLoading) {
    return null; // You can return a loading indicator if needed
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Capture" component={Capture} options={{ headerShown: false }}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
