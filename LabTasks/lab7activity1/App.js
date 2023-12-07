import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';

export default function Example() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Zunaira");

  useEffect(() => {
    if (count === 5) {
      setName("Rabia");
    }
  }, [count]);

  return (
    <View style={styles.container}>
      <Text>{count}</Text>
      <Text>{name}</Text>
      <Button title="Add" onPress={() => setCount(count + 1)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    padding: 20,
    borderWidth: 10, // Change to a number
    borderColor: 'orange',
  },
});
