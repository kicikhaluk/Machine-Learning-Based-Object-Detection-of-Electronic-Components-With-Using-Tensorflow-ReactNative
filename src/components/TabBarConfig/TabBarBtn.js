import React from 'react';
import {
  TouchableOpacity,
  View,
  StyleSheet
} from 'react-native';

const CustomButton = props => {
  return (
    <TouchableOpacity
      style={{ ...styles.container, ...props.style }}
      onPress={props.onPress}
    >
      {props.children}
    </TouchableOpacity>
  );
};



const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default CustomButton;
