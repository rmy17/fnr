import {Icon} from '@rneui/themed';
import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {ActivityIndicator} from 'react-native-paper';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import api, {apiUrl} from '../api';
import {useAppDispatch} from '../redux/hooks';
import {addNewArticle, fetchAllArticles} from '../redux/slices/articles.slice';

const intitialText = '';

const NewArticle = () => {
  const dispatch = useAppDispatch();
  const [text, setText] = useState(intitialText);
  const [isloading, setIsLoading] = useState(false);
  const [images, setImages] = useState([] as string[]);

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
        setImages([]);
      }
    })();
  };

  const addPhotos = () => {
    (async () => {
      try {
        console.log('adding photos');
        const result = await launchImageLibrary({
          mediaType: 'photo',
        });
        console.log('result: ', result);
        if (result.assets === undefined) {
          return;
        }

        for (const asset of result.assets) {
          try {
            // for the time being support only jpg
            const imageName =
              Date.now() + '_' + Math.floor(1e6 * Math.random()) + '.jpg';
            console.log('imageName: ', imageName);
            const formData = new FormData();
            formData.append('file', {
              uri: asset.uri,
              name: imageName,
              type: asset.type,
            });
            const response = await api.upload(formData);
            console.log('response: ', response);
            const imageUri = apiUrl + '/upload/' + imageName;
            console.log('imageUri: ', imageUri);
            setImages([...images, imageUri]);
          } catch (err) {
            console.log('err: ', err);
          }
        }
      } catch (err) {
        console.log('err', err);
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
        placeholder="Hey what`s up ?"
      />
      <View>
        {images.map(image => (
          <Image
            key={image}
            style={styles.image}
            source={{
              uri: image,
            }}
          />
        ))}
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={addPhotos}>
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
    justifyContent: 'space-around',
    padding: 10,
  },
  image: {
    height: 200,
    resizeMode: 'cover',
  },
});
