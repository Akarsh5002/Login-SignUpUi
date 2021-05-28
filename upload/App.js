import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './WelcomeScreen';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import AppNavigator from './navigator';
export default class App extends React.Component{
   render(){
    return (
      
      <AppContainer/>
    )
  }
 
}
const appNavigator = createSwitchNavigator({
WelcomeScreen:{screen: WelcomeScreen}, 
  AppNavigator:{screen: AppNavigator}
})
const AppContainer =  createAppContainer(appNavigator);
