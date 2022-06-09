import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Icon} from '@rneui/base';
import React, {useLayoutEffect} from 'react';
import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {RootStackParamList} from '../navigation';
import {useAppSelector} from '../redux/hooks';
import {selectAuthentication} from '../redux/slices/authentication.slice';
import LegalScreen from './LegalScreen';
import SettingsScreen from './SettingsScreen';
import WallScreen from './WallScreen';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
const Tab = createMaterialBottomTabNavigator();

const HomeScreen = ({navigation}: HomeProps) => {
  const authentication = useAppSelector(selectAuthentication);

  useLayoutEffect(() => {
    if (!authentication.user) {
      navigation.replace('Login');
    }
  }, [authentication]);

  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        options={{
          tabBarLabel: 'Wall',
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={26} />,
        }}
        name="Wall"
        component={WallScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Legal',
          tabBarIcon: ({color}) => (
            <Icon name="policy" color={color} size={26} />
          ),
        }}
        name="Legal"
        component={LegalScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({color}) => (
            <Icon name="settings" color={color} size={26} />
          ),
        }}
        name="Settings"
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.dark,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  textContainer: {
    fontSize: 50,
    fontWeight: 'bold',
  },
});
