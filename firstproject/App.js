import React from 'react';
import { View } from 'react-native';
import CounterApp from './Counter';

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
      <CounterApp />
    </View>
  );
};

export default App;

