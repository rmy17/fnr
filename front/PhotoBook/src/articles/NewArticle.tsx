import {Icon} from '@rneui/themed';
import React, {useState} from 'react';
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useAppDispatch} from '../redux/hooks';
import {addNewArticle, fetchAllArticles} from '../redux/slices/articles.slice';

const intitialText = '';

const NewArticle = () => {
  const dispatch = useAppDispatch();
  const [images] = useState([]);
  const [text, setText] = useState(intitialText);
  const [isloading, setIsLoading] = useState(false);

  const onSubmit = () => {
    (async () => {
      try {
        setIsLoading(true);
        console.log('About to add article');
        await dispatch(addNewArticle({content: text, images: images})).unwrap();
        setIsLoading(false);
        await dispatch(fetchAllArticles()).unwrap();
        console.log('fin ...');
      } catch (err) {
        console.log('err', err);
      } finally {
        setIsLoading(false);
        setText(intitialText);
      }
    })();
  };

  const addPhoto = () => {
    console.log('addPhoto', addPhoto);
  };

  return (
    <View style={styles.mainContainer}>
      <TextInput
        multiline
        numberOfLines={3}
        onChangeText={setText}
        value={text}
        style={styles.textInput}
        placeholder="Hey what`s up ?"
      />
      <View style={styles.buttons}>
        <TouchableOpacity onPress={addPhoto}>
          <View style={styles.buttonContainer}>
            <Icon name="add-photo-alternate" color={'white'} />
          </View>
        </TouchableOpacity>
        {isloading ? (
          <ActivityIndicator />
        ) : (
          <TouchableOpacity onPress={onSubmit}>
            <View style={styles.buttonContainer}>
              <Icon name="add" color={'white'} />
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default NewArticle;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.dark,
    justifyContent: 'center',
    width: '100%',
  },
  textInput: {
    borderWidth: 1,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    backgroundColor: 'hsl(240, 100%, 70%)',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 30,
  },
});
