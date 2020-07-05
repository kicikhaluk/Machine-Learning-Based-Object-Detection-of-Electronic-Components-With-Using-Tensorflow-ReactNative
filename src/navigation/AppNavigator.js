import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PreviewScreen, { screenOptions as previewScreenOptions } from '../screens/Solver/PreviewScreen';
import ValuesScreen from '../screens/Solver/ValuesScreen';
import ResultScreen from '../screens/Solver/ResultScreen';

import HistoryScreen from '../screens/HistoryScreen';
import InfoScreen, { screenOptions as infoScreenOptions } from '../screens/InfoScreen';
import TabBar from '../components/TabBarConfig/TabBar';

import Colors from '../constants/Colors';

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.secondary : ''
  },
  headerTitleStyle: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  headerTintColor: Platform.OS === 'android' ? Colors.primary : Colors.primary,
  headerTitleAlign: 'center'
};

const tabBarNavOptions = {
  activeTintColor: Colors.primary,
  activeBackgroundColor: Colors.secondary,
  inactiveTintColor: Colors.primary,
  inactiveBackgroundColor: Colors.secondary

};

const InfoStackNavigator = createStackNavigator();

const InfoNavigator = props => {
  return (
    <InfoStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <InfoStackNavigator.Screen
        name="Info"
        component={InfoScreen}
        options={infoScreenOptions}
      />
    </InfoStackNavigator.Navigator>
  );
};

const SolverStackNavigator = createStackNavigator();

const SolverNavigator = props => {
  return (
    <SolverStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <SolverStackNavigator.Screen
        name='Preview'
        component={PreviewScreen}
        options={previewScreenOptions}
      />
      <SolverStackNavigator.Screen
        name='Values'
        component={ValuesScreen}
      />
      <SolverStackNavigator.Screen
        name='Result'
        component={ResultScreen}
      />
    </SolverStackNavigator.Navigator>
  );
};

const HistoryStackNavigator = createStackNavigator();

const HistoryNavigator = props => {
  return (
    <HistoryStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <HistoryStackNavigator.Screen
        name='History'
        component={HistoryScreen}
      />
      <HistoryStackNavigator.Screen
        name='Result'
        component={ResultScreen}
      />
    </HistoryStackNavigator.Navigator>
  );
};

const AppBottomTabNavigator = createBottomTabNavigator();

export const MainNavigator = props => {
  return (
    <AppBottomTabNavigator.Navigator
      initialRouteName='Info'
      tabBar={props => <TabBar {...props} />}
    >
      <AppBottomTabNavigator.Screen
        name='Info'
        component={InfoNavigator}
      />
      <AppBottomTabNavigator.Screen
        name='Solver'
        component={SolverNavigator}
      />
      <AppBottomTabNavigator.Screen
        name='History'
        component={HistoryNavigator}
      />
    </AppBottomTabNavigator.Navigator>
  );
};