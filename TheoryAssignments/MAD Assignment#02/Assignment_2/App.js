import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Registration from './Registration';
import Home from './home';
import CvInput from './CvInput';
import CvPage from './CvPage';
import FontLoader from './FontLoader';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <FontLoader>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Registration" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Registration" component={Registration} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="CvInput" component={CvInput} />
          <Stack.Screen name="CVPage" component={CvPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </FontLoader>
  );
}

export default App;
