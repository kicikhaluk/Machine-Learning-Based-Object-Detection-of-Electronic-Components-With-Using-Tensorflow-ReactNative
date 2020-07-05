import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Input from '../../components/UI/Input.';
import CustomButton from '../../components/UI/CustomButton';
import Colors from '../../constants/Colors'
const ValuesScreen = props => {

  const circuitData = useSelector(state => state.solver.circuitData);
  console.log(circuitData);
  const foundedResistors = circuitData.filter(item => item.name === 'resistor');
  const foundedVoltage = circuitData.filter(item => item.name === 'voltage');


  let resistorValues = [];
  let voltageValues = [];

  const onInputChangeHandler = (value, elementType) => {
    if (elementType === 'resistor') {
      resistorValues.push(value);
    } else {
      voltageValues.push(value);
    }
  };

  return (
    <View style={styles.valuesScreen}>
      <FlatList
        data={circuitData}
        keyExtractor={item => item.id}
        renderItem={(itemData) => (
          <Input
            id={itemData.item.id}
            onInputChange={onInputChangeHandler}
            elementType={itemData.item.name}
          />
        )}
        ListHeaderComponent={
          <View style={styles.textContainer}>
            <Text style={styles.text}>Your Circuit contains {foundedResistors.length} Resistor</Text>
            <Text style={styles.text}>Your Circuit contains {foundedVoltage.length} Voltage</Text>
            <Text style={styles.text}>To see your result please enter values of elements as V,ohm</Text>
          </View>
        }
        ListFooterComponent={
          <View style={styles.btnContainer}>
            <CustomButton
              title="See Result"
              onPress={() => {
                console.log(voltageValues, resistorValues);
                props.navigation.navigate('Result', {
                  voltageValues,
                  resistorValues
                });
              }}
            />
          </View>
        }
      />
    </View >
  );
};

const styles = StyleSheet.create({
  valuesScreen: {
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textContainer: {
    marginVertical: 20,
  },
  text: {
    color: Colors.secondary,
    fontSize: 18,
    marginBottom: 10,
    lineHeight: 30
  },
  btnContainer: {
    marginHorizontal: 40,
    marginTop: 20,
  }
});

export default ValuesScreen;