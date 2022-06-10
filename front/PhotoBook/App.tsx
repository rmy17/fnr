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
import {Provider} from 'react-redux';
import api from './src/api';
import DeviceInfoModule from './src/native/DeviceInfoModule';
import {RootStackParamList} from './src/navigation';
import {useAppDispatch} from './src/redux/hooks';
import {connect} from './src/redux/slices/authentication.slice';
import {store} from './src/redux/store';
import HomeScreen from './src/screen/HomeScreen';
import LoginScreen from './src/screen/LoginScreen';
import SplashScreen from './src/screen/SplashScreen';

export const testx = () => {
  (async () => {
    try {
      const result = await DeviceInfoModule.getUniqueId('hello world');
      console.log('result', result);

      const resultDeux = await DeviceInfoModule.getUniqueId('zut');
      console.log('resultDeux', resultDeux);
    } catch (err) {
      console.log('err', err);
    }
  })();
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  testx();
  return (
    <Provider store={store}>
      <ReduxApp></ReduxApp>
    </Provider>
  );
};

const ReduxApp = () => {
  const dispatch = useAppDispatch();
  const [isloading, setIsLoading] = useState(true);
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    (async () => {
      try {
        console.log('isconnected');
        const user = await api.isConnected();
        if (user) {
          dispatch(connect(user));
        }
      } catch (err) {
        console.log('err: ', err);
      } finally {
        setIsLoading(false);
      }
    })();
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
                initialRouteName="Home"
                screenOptions={{headerShown: false}}>
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
