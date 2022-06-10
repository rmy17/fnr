import React, {useState} from 'react';
import {TextInput, StyleSheet, Text, View, Button} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useAppDispatch} from '../redux/hooks';
import {addNewArticle} from '../redux/slices/articles.slice';

const NewArticle = () => {
  const dispatch = useAppDispatch();
  const [images] = useState([]);
  const [text, setText] = useState("Hey what's up ?");

  const onSubmit = () => {
    console.log('About to add article');
    (async () => {
      try {
        await dispatch(addNewArticle({content: text, images: images})).unwrap();
      } catch (err) {
        console.log('err', err);
      } finally {
      }
    })();
  };

  return (
    <View style={styles.mainContainer}>
      <TextInput
        multiline
        numberOfLines={3}
        onChangeText={setText}
        value={text}
        style={styles.textInput}
      />
      <Button title="Ajouter un article" onPress={onSubmit} />
    </View>
  );
};

export default NewArticle;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.dark,
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 10,
  },
  textInput: {
    borderWidth: 1,
    textAlignVertical: 'top',
  },
});
