import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { StyleSheet } from 'react-native';
import { AppLoading } from "expo";
import * as Font from "expo-font";
import ReduxThunk from "redux-thunk";

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoadingScreen from './screens/Auth/LoadingScreen';
import LoginScreen from './screens/Auth/LoginScreen';
import RegisterScreen from './screens/Auth/RegisterScreen';
import HomeScreen from './screens/Auth/HomeScreen';

import * as firebase from 'firebase';

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
    "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "roboto-medium": require("./assets/fonts/Roboto-Medium.ttf"),
  });
};

var firebaseConfig = {
  apiKey: "AIzaSyCXGF_VJlPv--4MVtbThMbLi4OKwZFg_Rw",
  authDomain: "hangry-e75ec.firebaseapp.com",
  databaseURL: "https://hangry-e75ec.firebaseio.com",
  projectId: "hangry-e75ec",
  storageBucket: "hangry-e75ec.appspot.com",
  messagingSenderId: "1086050370672",
  appId: "1:1086050370672:web:eb084d99916d137d3d60b5"
};

!firebase.apps.length
  ? firebase.initializeApp(firebaseConfig).firestore()
  : firebase.app().firestore();
// Initialize Firebase


const AppStack = createStackNavigator({
  Home: HomeScreen
})

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen
})

export default createAppContainer(

  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "Loading"
    }

  )
)
/*
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
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
