import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {RootStackParamList} from '../navigation';
import {
  connect,
  selectAuthentication,
  User,
} from '../redux/slices/authentication.slice';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import api from '../api';

type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen = ({navigation}: LoginProps) => {
  const authentication = useAppSelector(selectAuthentication);
  const dispatch = useAppDispatch();

  const [login, setLogin] = useState('');
  const [password, setpassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onPress = () => {
    (async () => {
      try {
        setIsLoading(true);
        const user = await api.connect({login, password});
        dispatch(connect(user));
        navigation.navigate('Home');
      } catch (err) {
        console.log('err', err);
        setErrorMsg('bad login');
      } finally {
        setIsLoading(false);
      }
    })();
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
        onChangeText={setpassword}
        defaultValue={''}
        secureTextEntry
      />
      <Text style={styles.error}>{errorMsg}</Text>
      {isLoading ? (
        <ActivityIndicator></ActivityIndicator>
      ) : (
        <Button title="CONNECT" onPress={onPress}></Button>
      )}
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
  error: {
    color: 'red',
    fontWeight: 'bold',
    height: 50,
    textAlign: 'center',
  },
});
