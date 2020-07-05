import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import CustomButton from '../components/UI/CustomButton';

const HistoryScreen = props => {

  return (
    <View style={styles.historyContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Problem #123</Text>
        <Text style={styles.text}>01/07/2020 10.00 am</Text>
      </View>
      <View style={styles.preview}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../assets/img/example.png')}
          />
        </View>
        <View style={styles.action}>
          <CustomButton
            title='See Result'
            onPress={() => { }}
          />
        </View>
      </View>
    </View>

  );
};

const styles = StyleSheet.create({

  historyContainer: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 8,
    overflow: 'hidden'
  },
  textContainer: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 6
  },
  preview: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  text: {
    fontSize: 13,
    color: '#888'
  },
  imageContainer: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    resizeMode: 'contain'
  }
});

export default HistoryScreen;