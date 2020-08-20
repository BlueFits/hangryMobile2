import React from 'react';
import 'react-native-gesture-handler';
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { StyleSheet, View } from 'react-native';

//Navigation
import NavigationController from "./navigation/NavigationController";

//Reducer Imports Here
import authReducer from "./store/reducers/auth";

const rootReducer = combineReducers({
  authReducer,
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationController />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
