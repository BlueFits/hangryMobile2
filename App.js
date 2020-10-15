import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { StyleSheet } from 'react-native';
import { AppLoading } from "expo";
import * as Font from "expo-font";

//Navigation
import NavigationController from "./navigation/NavigationController";

//Reducer Imports Here
import authReducer from "./store/reducers/auth";
import restaurantReducer from "./store/reducers/restaurants";

const rootReducer = combineReducers({
  authReducer,
  restaurantReducer,
});

const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "roboto-medium": require("./assets/fonts/Roboto-Medium.ttf"),
  });
};

export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return <AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)} />
  }

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
