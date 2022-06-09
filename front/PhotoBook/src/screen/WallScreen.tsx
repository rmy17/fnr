import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Icon} from '@rneui/themed';

const WallScreen = () => {
  return (
    <View style={styles.mainContainer}>
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
});
