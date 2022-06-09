import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {RootStackParamList} from '../navigation';
import {
  connect,
  selectAuthentication,
  User,
} from '../redux/slices/authentication.slice';
import {useAppDispatch, useAppSelector} from '../redux/hooks';

type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen = ({navigation}: LoginProps) => {
  const authentication = useAppSelector(selectAuthentication);
  const dispatch = useAppDispatch();

  const [login, setLogin] = useState('');
  const [mdp, setMdp] = useState('');

  const onPress = () => {
    const user: User = {displayName: 'Toto'};
    dispatch(connect(user));
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.textContainer}>Login screen</Text>
      <TextInput
        style={styles.input}
        placeholder="Login"
        onChangeText={setLogin}
        defaultValue={''}
      />
      <TextInput
        style={styles.input}
        onChangeText={setMdp}
        defaultValue={''}
        secureTextEntry
      />
      <Button title="CONNECT" onPress={onPress}></Button>
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
    textAlign: 'center',
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
