import React from 'react';
import { View, Text, Modal, Button, StyleSheet } from 'react-native';

const History = ({ visible, calculations, closeModal }) => {
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.container}>
        <Text style={styles.title}>Calculation History</Text>
        {calculations.map((calculation, index) => (
          <Text key={index} style={styles.historyItem}>
            {calculation}
          </Text>
        ))}
        <Button title="Close" onPress={closeModal} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  historyItem: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default History;
