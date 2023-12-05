import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Registration = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const asyncWrite = async ({key, value}) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.log("Error occured! ", error);
    }
  }

  const handleRegister = async () => {
    if (email === '' || password === '') {
      return;
    }

    try {
      await AsyncStorage.setItem('email', email);
      await AsyncStorage.setItem('password', password);
    } catch (error) {
      console.log("Error occured! ", error);
    }

    navigation.navigate('Login');
  }

  return (
    <View style={styles.container}>
      <Image
        style={{ width: "100%", height: 420, objectFit: 'cover', position: 'absolute', top: 0}}
        resizeMode='cover'
        source={require('./assets/bg.png')}
      />
      <View style={styles.circle}>
        <Image
          style={{ width: 50, height: 50, flex: 1 }}
          resizeMode='center'
          source={require('./assets/icon1.png')}
        />
      </View>
      <TextInput
        style={styles.textInput1}
        placeholder="Email"
        placeholderTextColor="seagreen"
        onChangeText={setEmail}
      />
     
      <TextInput
        style={styles.textInput}
        placeholder="Password"
        secureTextEntry={true}
        placeholderTextColor="seagreen"
        onChangeText={setPassword}
      />
       

      <TouchableOpacity
        style={styles.customButton}
        onPress={() => {
          handleRegister();
        }}
      >
        <Text style={styles.buttonText}>REGISTER</Text>
      </TouchableOpacity>
      <View style={styles.labelsContainer}>
        <Text style={styles.label}>
          <Icon name="lock" size={20} /> Forgotten Password?
        </Text>
        <Text style={styles.label}>
          <Icon name="user-plus" size={20} /> Create your account
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 100,
    backgroundColor: 'rgba(8, 154, 120, 1)',
    borderStyle: "solid",
    borderWidth: 2,
    position: 'absolute',
    top: 100,
    borderColor: 'rgba(236, 244, 239, 1)',
    justifyContent: 'center', alignItems: 'center'
  },
  textInput1: {
    width: 300,
    height: 60,
    borderColor: 'rgba(67, 176, 143, 1)',
    borderRadius: 30,
    borderWidth: 3,
    top: 210,
    position: 'absolute',
    marginTop: 20,
    paddingLeft: 10,
    backgroundColor: 'rgba(236, 244, 239, 1)',
  },
  textInput: {
    width: 300,
    height: 60,
    borderColor: 'rgba(67, 176, 143, 1)',
    borderRadius: 30,
    borderWidth: 3,
    position: 'absolute',
    top: 320,
    paddingLeft: 10,
    backgroundColor: 'rgba(236, 244, 239, 1)',
  },
  customButton: {
    width: 300,
    height: 50,
    backgroundColor: 'rgba(248, 86, 9, 1)',
    padding: 15,
    position: 'absolute',
    top: 470,
    borderColor: 'rgba(248, 157, 113, 1)',
    borderWidth: 2,
    borderRadius: 50,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
  },
  labelsContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 550,
  },
  label: {
    flexDirection: 'row',
    marginTop: 20,
    color: 'rgba(8, 154, 120, 1)',
    fontSize: 15,
    fontWeight: 'bold',
    alignItems: 'center',
  },
});

export default Registration;