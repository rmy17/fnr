import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const LegalScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.textContainer}>LegalScreen</Text>
      <Image style={styles.image} source={require('../../assets/legal.png')} />
    </View>
  );
};

export default LegalScreen;

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
    width: '100%',
  },
});
