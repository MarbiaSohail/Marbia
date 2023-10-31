import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

const DATA = [
 {
 id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
 title: '1st Item',
 },
 {
 id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
 title: '2nd Item',
 },
 {
 id: '58694a0f-3da1-471f-bd96-145571e29d72',
 title: '3rd Item',
 },
 {
  id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb2bba',
  title: '4th Item',
  },
];

const Item = ({ title }) => (
 <View style={styles.item}>
 <Text style={styles.title}>{title}</Text>
 </View>
);

const App = () => {
 const renderItem = ({ item }) => (
 <Item title={item.title} />
 );

 return (
   <SafeAreaView style={styles.container}>
     <FlatList
       data={DATA}
       renderItem={renderItem}
       keyExtractor={item => item.id}
     />
   </SafeAreaView>
 );
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   marginTop: StatusBar.currentHeight || 0,
   justifyContent:'center',
   margin:50,
 },
 item: {
   backgroundColor: 'yellow',
   padding: 20,
   marginVertical: 8,
   marginHorizontal: 16,
   borderRadius:10,
 },
 title: {
   fontSize: 20, // Reduced font size to make text visible
 },
});

export default App;
