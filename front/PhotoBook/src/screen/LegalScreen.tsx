import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const LegalScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.textContainer}>LegalScreen</Text>
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
});
