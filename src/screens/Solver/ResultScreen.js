import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import CustomButton from '../../components/UI/CustomButton';

const ResultScreen = props => {
  const { voltageValues, resistorValues } = props.route.params;
  const totalResistorValues = resistorValues.reduce((acc, cur) => acc + cur);
  const totalVoltageValues = voltageValues.reduce((acc, cur) => acc + cur);
  const currentValue = totalVoltageValues / totalResistorValues;

  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Total Voltage Values is : {totalVoltageValues} V</Text>
      <Text style={styles.text}>Total Resistor Values is : {totalResistorValues} ohm</Text>
      <Text style={styles.text}>Current of the Circuit is : {currentValue.toFixed(3)} A</Text>
      <Text style={styles.text}>Power of the Circuit is: {(currentValue * totalVoltageValues).toFixed(3)} Watt</Text>
      <View>
        <CustomButton
          title="Solve Another Circuit"
          onPress={() => props.navigation.popToTop()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    color: Colors.secondary
  }
});

export default ResultScreen;