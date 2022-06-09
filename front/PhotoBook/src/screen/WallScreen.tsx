import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const WallScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.textContainer}>PhotoBook</Text>
    </View>
  );
};

export default WallScreen;

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  textContainer: {
    fontSize: 50,
    fontWeight: 'bold',
  },
});
