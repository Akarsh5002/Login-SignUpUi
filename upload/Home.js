import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  Button,
  Modal,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import { BlurView } from 'expo-blur';
import LottieView from 'lottie-react-native';
import {
  SafeAreaView,
  SafeAreaProvider,
  SafeAreaInsetsContext,
  useSafeAreaInsets,
  initialWindowMetrics,
} from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

export default class Home extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require('./colorful-background-theme_23-2148451521.jpg')}
        style={{ width: '100%', height: '100%' }}>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            paddingHorizontal: 20,
          }}>
         
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('WelcomeScreen')}
              style={{
                paddingHorizontal: 10,
                paddingVertical: 13,
                borderRadius: 10,
                marginTop: 30,
                backgroundColor: '#9a3c7e',
              }}>
              <Image source={require('./back.png')}
               style={{ height: 15, width: 20 }} />
            </TouchableOpacity>
            
        </View>
         <View style={styles.container}>
            <Text style={styles.title}>Home</Text>
          </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff9800',
    justifyContent: 'space-evenly',
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    margin: 10,
    marginTop: 0,
    marginLeft: 40,
  },
  title: {
  
    fontSize: 25,
    fontWeight: 'bold',
  },
});
