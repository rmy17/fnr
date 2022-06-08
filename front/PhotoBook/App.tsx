/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {StatusBar, StyleSheet, useColorScheme} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {RootStackParamList} from './src/navigation';
import HomeScreen from './src/screen/HomeScreen';
import LoginScreen from './src/screen/LoginScreen';
import SplashScreen from './src/screen/SplashScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  const [isloading, setIsLoading] = useState(true);
  const isDarkMode = useColorScheme() === 'dark';

  const isConnected = false;

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeAreaView}>
        <StatusBar barStyle={'dark-content'} />
        {isloading ? (
          <SplashScreen />
        ) : (
          <NavigationContainer>
            {
              <Stack.Navigator
                initialRouteName={isConnected ? 'Home' : 'Login'}>
                <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
                <Stack.Screen
                  name="Login"
                  component={LoginScreen}></Stack.Screen>
              </Stack.Navigator>
            }
          </NavigationContainer>
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: 'dark',
    flex: 1,
  },
});

export default App;
