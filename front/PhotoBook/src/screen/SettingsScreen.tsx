import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import api from '../api';
import {useAppDispatch} from '../redux/hooks';
import {disconnect} from '../redux/slices/authentication.slice';

const SettingsScreen = () => {
  const dispatch = useAppDispatch();

  const onPressDisconnect = () => {
    console.log('Disconnect');
    (async () => {
      try {
        dispatch(disconnect(undefined));
        await api.disconnect();
      } catch (err) {
        console.log('err: ', err);
      }
    })();
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.textContainer}>SettingsScreen</Text>
      <Button title="Disconnect" onPress={onPressDisconnect} />
    </View>
  );
};

export default SettingsScreen;

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
