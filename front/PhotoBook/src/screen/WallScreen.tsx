import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import NewArticle from '../articles/NewArticle';
import {backendUrl} from '../env';

const WallScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Image
        style={styles.image}
        source={{uri: backendUrl + '/images/wall.jpeg'}}
      />
      <NewArticle />
      <Text style={styles.textContainer}>WallScreen</Text>
    </View>
  );
};

export default WallScreen;

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
  image: {
    height: 300,
    width: '100%',
  },
});
