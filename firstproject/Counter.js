import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';

const CounterApp = () =>{
let[count, setCount]= useState(0);

const increment = () =>{
  setCount(count+1);
};

const decrement = () =>{
  setCount(count-1);
};

return(
<View style={styles.container}>

<Text style={styles.counterText}> Counter: {count}</Text>

<TouchableOpacity onPress={increment} >
  <View style={{backgroundColor:'grey', padding: 15, margin:10, borderRadius:10,}}>
  <Text style={{color: 'white'}}>Increment</Text>
  </View>
</TouchableOpacity>

<TouchableOpacity onPress={decrement}>
  <View style={{backgroundColor:'grey', padding:15, margin:10, borderRadius:10}}>
  <Text style={{color:'white'}}>Decrement</Text>
  </View>
</TouchableOpacity>

</View>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
  },
  counterText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default CounterApp;

