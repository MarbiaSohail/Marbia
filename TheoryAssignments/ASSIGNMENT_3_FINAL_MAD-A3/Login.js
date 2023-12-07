
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {  StyleSheet, Text, View , Image, TextInput,TouchableOpacity, Pressable
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const getEmail = async () => {
      try {
        return await AsyncStorage.getItem('email');
      } catch (err) {
        console.log("An error occured: ", err);
      }
    }
  
    const getPassword = async () => {
      try {
        return await AsyncStorage.getItem('password');
      } catch (err) {
        console.log("An error occured: ", err);
      }
    }
  
    const handleLogin = async () => {
      const storedEmail = await getEmail(); 
      const storedPassword = await getPassword();

      if (storedEmail === email && storedPassword === password) {
        navigation.navigate("CvInput");
      }
    }

    return (
        <View style={styles.container}>
          <Image
              style={{
                width: '100%', height: 420, justifyContent: 'flex-start', 
                position: 'absolute', top: 0
              }}
              resizeMode='cover'
              source={require('./assets/pic1.png')}
          />
          <View style={styles.circle}>
              <Text style={{ fontSize: 32, fontWeight: 'bold', color: '#fff'}}>CV</Text>
          </View>
          <TextInput
            style={[styles.textInput, styles.textInput1]}
            placeholder="Email"
            placeholderTextColor="seagreen"
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            placeholderTextColor="seagreen"
            onChangeText={setPassword}
            secureTextEntry={true}
          />
          <TouchableOpacity
            style={styles.customButton}
            onPress={() => {
              handleLogin();  
            }}
          >
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
          <View style={styles.labelsContainer}>
            <Pressable style={styles.label} onPress={() => navigation.navigate('Registration')}>
              <Text style={styles.label}>
                <Icon name="lock" size={20} style={{marginRight: 5}} />
                Forgot password
              </Text>
            </Pressable>
            <Pressable style={styles.label} onPress={() => navigation.navigate('Registration')}>
              <Text style={styles.label}>
                <Icon name="user-plus" size={20} style={{marginRight: 5}} />
                Create your account
              </Text>
            </Pressable>
          </View>
      </View>
    );
};

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
      borderRadius:'50%',
      backgroundColor: 'orange',
      borderStyle: "solid",
      borderWidth: 2,
      position:'absolute',
      top:100,
      borderColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center'
    },
    textInput1: {
      top:250,
    },
    textInput: {
      width: 300, 
      height: 60, 
      borderColor: 'orange',
      borderRadius:30,
      borderWidth: 3,

      position:'absolute',
      top:320, 
      paddingLeft: 10,
      backgroundColor: '#eee',
    },
    customButton: {
      width: 300,
      height: 50, 
      backgroundColor: 'orange',
      padding: 15,
      position:'absolute',
      top: 470,
      borderColor:'orangered',
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
      position:'absolute',
      top: 550,
    },
    label: {
      flexDirection: 'row',
      marginTop:5,
      color:'rgba(8, 154, 120, 1)',
      fontSize:15,
      fontWeight:'bold',
      alignItems: 'center',
    },
  });
  
export default Login;
