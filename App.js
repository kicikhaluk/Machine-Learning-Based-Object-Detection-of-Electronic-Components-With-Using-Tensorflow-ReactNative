import React from 'react';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import { MainNavigator } from './src/navigation/AppNavigator';
import solverReducer from './src/store/reducer/solver';

enableScreens();
const rootReducer = combineReducers({
  solver: solverReducer
});

const store = createStore(rootReducer);

const App = props => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;