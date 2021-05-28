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
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
const { width, height } = Dimensions.get('window');
export default class WelcomeScreen extends React.Component {
  
  render() {
    return (
      <ImageBackground
        source={require('./autumn-5704791_1920.jpg')}
        style={{ width: '100%', height: '100%' }}>
      
       
        
        <View style={styles.screen}>
       
          <LottieView
            style={styles.lottie}
            source={require('./39476-login-screen.json')}
            autoPlay
            loop
          />
        </View>
        <View style={styles.container}>
          <BlurView
            intensity={100}
            style={[
              StyleSheet.absoluteFill,

              styles.nonBlurredContent,
            ]}>
            <TextInput
              style={styles.loginBox}
              placeholder="username"
              placeholderTextColor={'lime'}
              keyboardType="email-address"
              onChangeText={(text) => {
                this.setState({
                  emailId: text,
                });
              }}
            />
            <TextInput
              style={styles.loginBox}
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor={'lime'}
              keyboardType="password"
              onChangeText={(text) => {
                this.setState({
                  password: text,
                });
              }}
            />
          </BlurView>
        </View>
        <View style = {styles.bottomContainer}>
        <TouchableOpacity style = {styles.button}
        onPress={()=>this.props.navigation.navigate('Home')}>
        <Text style = {styles.buttonText}>Login</Text>
        
        </TouchableOpacity>
        <TouchableOpacity style = {styles.button}
        onPress={()=>this.props.navigation.navigate('SignUp')}>
        <Text style = {styles.buttonText}>SignUp</Text>
        
        </TouchableOpacity>
        </View>

        <StatusBar style="auto" />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  buttonText: {
    color: '#000',
    fontWeight: '200',
    fontSize: 20,
  },
  button:{
width:300,
height:50,
alignItems:'center',
justifyContent:'center',
backgroundColor:'#ff9800',
justifyContent:"space-evenly",
borderTopRightRadius:40,
borderBottomLeftRadius:40,
margin:10,
marginLeft:40
  },

  loginBox: {
    width: width / 1.2,
    height: 40,
    fontSize: 30,
    margin: 20,
    paddingLeft: 10,
    color: 'lime',
    borderBottomWidth: 1.5,
    borderColor: 'red',
  },

  lottie: {
    width: 300,
    height: 350,
  },
  screen: {
    marginBottom:-200,
    alignItems: 'center',
  },
  container: {
    width: width / 1.1,
    height: 300,
    marginTop: height / 6,
    margin: 20,
    borderWidth: 10,
  },
  nonBlurredContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  heading: {
    fontSize: 35,
    color: 'aqua',
    margin:10,
    textDecorationLine: 'underline'
  },
  title:{
    alignContent:'center',
    alignItems:'center',
  }
});
