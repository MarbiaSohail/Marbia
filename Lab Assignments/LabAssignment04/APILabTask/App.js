import { Button, StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import axios  from 'axios';

export default function App() {
  const [counter, setCounter] = useState(0);
  const [country, setCountry] = useState('');
  const [countryPopulation, setCountryPopulation] = useState(0);

  const getCountry = async () => {
    try {
      return await axios.get('https://restcountries.com/v3/all');
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCountry()
      .then((response) => {
        console.log(response);
        const data = response['data'];
        // console.log(data[0].name.official);
        setCountry(data[counter].name.official);
        setCountryPopulation(data[counter].population);
      })
      .catch(error => console.log(error));
  }, [counter]);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Country Info</Text>
      <Text style={{ paddingVertical: 10, paddingHorizontal: 35 }}>Name: {country}</Text>
      <Text style={{ paddingVertical: 10, paddingHorizontal: 35 }}>Population: { countryPopulation }</Text>
      <Button title='Next' onPress={() => {
        setCounter(counter + 1);
      }}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gainsboro',
    alignItems: 'center',
    justifyContent: 'center',
  },
});