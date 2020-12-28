import React, { useState } from "react";
import "react-native-gesture-handler";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { StyleSheet } from "react-native";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import ReduxThunk from "redux-thunk";

import * as firebase from "firebase";

//Navigation
import NavigationController from "./navigation/NavigationController";

//Reducer Imports Here
import authReducer from "./store/reducers/auth";
import restaurantReducer from "./store/reducers/restaurants";

const rootReducer = combineReducers({
  authReducer,
  restaurantReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const fetchFonts = () => {
  return Font.loadAsync({
    "roboto-regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "roboto-bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "roboto-medium": require("./assets/fonts/Montserrat-Medium.ttf"),
  });
};

var firebaseConfig = {
  apiKey: "AIzaSyCXGF_VJlPv--4MVtbThMbLi4OKwZFg_Rw",
  authDomain: "hangry-e75ec.firebaseapp.com",
  databaseURL: "https://hangry-e75ec.firebaseio.com",
  projectId: "hangry-e75ec",
  storageBucket: "hangry-e75ec.appspot.com",
  messagingSenderId: "1086050370672",
  appId: "1:1086050370672:web:eb084d99916d137d3d60b5",
};

!firebase.apps.length
  ? firebase.initializeApp(firebaseConfig).firestore()
  : firebase.app().firestore();
// Initialize Firebase

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
