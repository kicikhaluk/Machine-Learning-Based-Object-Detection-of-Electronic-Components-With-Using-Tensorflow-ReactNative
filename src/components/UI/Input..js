import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  TextInput
} from 'react-native';


const Input = props => {
  const { onInputChange, id, elementType } = props;
  const [touched, setTouched] = useState(false);
  const [value, setValue] = useState();

  useEffect(() => {
    if (touched) {

      onInputChange(value, elementType);
    }
  }, [onInputChange, touched, id, value, elementType]);

  const onChangeTextHandler = (value) => {
    setValue(parseInt(value));
  };

  const lostFocusHandler = () => {
    setTouched(true);
  };


  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder={elementType}
        style={styles.input}
        keyboardType='numeric'
        onChangeText={onChangeTextHandler}
        onBlur={lostFocusHandler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    width: '60%',
    textAlign: 'center',
    height: 30,
    borderRadius: 10,
    padding: 5,
    borderWidth: 1,
    marginBottom: 10,
  }
});

export default Input;