import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import Calculator from './Calculator';
import History from './History';

const App = () => {
  const [historyVisible, setHistoryVisible] = useState(false);
  const [calculations, setCalculations] = useState([]);
  const [originalPrice, setOriginalPrice] = useState('');

  const toggleHistoryModal = () => {
    setHistoryVisible(!historyVisible);
  };

  const saveCalculation = () => {
    const calculation = `${originalPrice} - ${discountPercentage}% = ${finalPrice}`;
    setCalculations([...calculations, calculation]);
  };

  return (
    <View style={styles.container}>
      <Calculator
        originalPrice={originalPrice}
        setOriginalPrice={setOriginalPrice}
        saveCalculation={saveCalculation}
      />
      <Button title="View History" onPress={toggleHistoryModal} />
      <History visible={historyVisible} calculations={calculations} closeModal={toggleHistoryModal} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
