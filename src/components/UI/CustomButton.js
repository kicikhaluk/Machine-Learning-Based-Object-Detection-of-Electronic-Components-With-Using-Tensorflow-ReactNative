import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import Colors from '../../constants/Colors';


const CustomButton = props => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={props.onPress}>
      <Text style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingVertical: 10,
    marginVertical: 5,
    borderRadius: 25,
    backgroundColor: Colors.primary
  },
  title: {
    textAlign: 'center',
    color: Colors.secondary,
    fontSize: 16,
    fontWeight: '700'
  }
});

export default CustomButton;