import React from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import LottieView from 'lottie-react-native';
import CustomButton from '../components/UI/CustomButton';
import Colors from '../constants/Colors';


const InfoScreen = props => {

  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" backgroundColor={Colors.secondary} />
      <ScrollView>
        <View style={styles.infoScreen}>
          <Text style={styles.title}>Solve Your Circuit Examples</Text>
          <Text style={styles.subtitle}>Just take a shot your circuit examples and upload it to your Basic Circuit Solver Application </Text>
          <LottieView
            style={styles.lottoView}
            source={require('../assets/animations/lf30_editor_K23jp3.json')}
            autoPlay
            loop
          />
          <Text style={styles.subtitle}> Press the button below or tap camera icon at the bottom</Text>
          <CustomButton
            title="Go to Solver"
            onPress={() => {
              props.navigation.navigate('Solver');
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export const screenOptions = {
  headerTitle: 'How to Use',

}

const styles = StyleSheet.create({
  infoScreen: {
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: Colors.secondary,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20
  },
  subtitle: {
    marginBottom: 10,
    padding: 5,
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 32
  },
  lottoView: {
    height: 300
  }
});

export default InfoScreen;