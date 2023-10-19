//import liraries
import React, { Component } from 'react';
import {  StyleSheet, Text, View , Image, TextInput , Button,TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// create a component
const Home = (props  ) => {
    return (
        <View style={styles.container}>
      <Image
        style={{width:350,height:400,justifyContent:'flex-start', 
        position:'absolute',top:25}}
        resizeMode='cover'
        source={require('./assets/bg.png')}
      />
      <View style={styles.circle}>
      <Image
        style={{width:50,height:50,flex: 1,
       }}
        resizeMode='center'
        
        source={require('./assets/icon1.png')}
      />
      </View>
      <TextInput
        style={styles.textInput1}
        placeholder="   Email"
        
        placeholderTextColor="rgba(8, 154, 120, 1)"
      />
      <TextInput
        style={styles.textInput}
        placeholder="   Password"
        placeholderTextColor="rgba(8, 154, 120, 1)"
      />
     <TouchableOpacity
        style={styles.customButton}
        onPress={() => {
            props.navigation.navigate("CV")
        }}
      >
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
      <View style={styles.labelsContainer}>
        <Text style={styles.label}>
          <Icon name="lock" size={20} />     Forgotten Password?
        </Text>
        <Text style={styles.label}>
          <Icon name="user-plus" size={20} />   Create your account
        </Text>
      </View>
    </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    circle: {
      width: 80,
      height: 80,
      borderRadius:100,
      backgroundColor: 'rgba(8, 154, 120, 1)',
      borderStyle: "solid",
      borderWidth: 2,
      position:'absolute',
      top:100,
      borderColor: 'rgba(236, 244, 239, 1)',
      justifyContent: 'center', alignItems: 'center'
    },
    textInput1: {
      width: 300, // Set your desired width
      height: 60, // Set your desired height
      borderColor: 'rgba(67, 176, 143, 1)',
      borderRadius:30,
      borderWidth: 3,
      top:210,
      position:'absolute',
      marginTop: 20, // Adjust the margin to your liking
      paddingLeft: 10,
      backgroundColor: 'rgba(236, 244, 239, 1)',
    },
    textInput: {
      width: 300, // Set your desired width
      height: 60, // Set your desired height
      borderColor: 'rgba(67, 176, 143, 1)',
      borderRadius:30,
      borderWidth: 3,
      
      position:'absolute',
      top:320, // Adjust the margin to your liking
      paddingLeft: 10,
      backgroundColor: 'rgba(236, 244, 239, 1)',
    },
    customButton: {
      width: 300, // Set your desired width
      height: 50, // Set your desired height
      backgroundColor: 'rgba(248, 86, 9, 1)',
      padding: 15,
      position:'absolute',
      top: 470,
      borderColor:'rgba(248, 157, 113, 1)',
      borderWidth:2,
      borderRadius: 50,
    },
    buttonText: {
      color: 'white',
      fontWeight:'bold',
      fontSize: 15,
      textAlign: 'center',
    },
    labelsContainer: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      position:'absolute',
      top: 550,
    },
    label: {
      flexDirection: 'row',
      marginTop:20,
      color:'rgba(8, 154, 120, 1)',
      fontSize:15,
      fontWeight:'bold',
      alignItems: 'center',
    },
  });
  
//make this component available to the app
export default Home;
