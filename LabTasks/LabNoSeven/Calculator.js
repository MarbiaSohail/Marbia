import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Calculator = () => {
  const [originalPrice, setOriginalPrice] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState('');
  const [finalPrice, setFinalPrice] = useState('');
  const [savings, setSavings] = useState('');

  const calculateDiscount = () => {
    const original = parseFloat(originalPrice);
    const discount = parseFloat(discountPercentage);

    if (!isNaN(original) && !isNaN(discount) && discount <= 100) {
      const discountAmount = (original * discount) / 100;
      const final = original - discountAmount;
      setSavings(discountAmount.toFixed(2));
      setFinalPrice(final.toFixed(2));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Original Price</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Original Price"
        keyboardType="numeric"
        onChangeText={(text) => setOriginalPrice(text)}
      />
      <Text style={styles.label}>Discount Percentage</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Discount Percentage"
        keyboardType="numeric"
        onChangeText={(text) => setDiscountPercentage(text)}
      />
      <Button title="Calculate" onPress={calculateDiscount} />
      <Text style={styles.result}>You Save: {savings}</Text>
      <Text style={styles.result}>Final Price: {finalPrice}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  label: {
    fontSize: 18,
  },
  input: {
    fontSize: 16,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    marginBottom: 10,
    padding: 5,
  },
  result: {
    fontSize: 18,
    marginTop: 10,
  },
});

export default Calculator;
