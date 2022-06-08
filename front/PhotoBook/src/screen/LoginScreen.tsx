import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {RootStackParamList} from '../navigation';

type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen = ({navigation}: LoginProps) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.textContainer}>Login screen</Text>
      <TextInput
        style={styles.input}
        placeholder="Login"
        onChangeText={newText => {}}
        defaultValue={''}
      />
      <TextInput
        style={styles.input}
        onChangeText={newText => {}}
        defaultValue={''}
        secureTextEntry={true}
      />
      <Button
        title="CONNECT"
        onPress={() => {
          navigation.navigate('Home');
        }}></Button>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.dark,
    alignItems: 'stretch',
    justifyContent: 'center',
    height: '100%',
    flexDirection: 'column',
    padding: 10,
  },
  textContainer: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 20,
    marginVertical: 20,
  },
});
