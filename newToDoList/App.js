import { StyleSheet, Text, View, TextInput, Button, FlatList, ScrollView } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const renderTodo = ({ item }) => {
    return (
      <View style={styles.todo_text_container}>
        <Text style={styles.todo_text}>{ item }</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}> 
      <View style={{ width: '100%', gap: 10, }}>
        <Text style={styles.title}>Todos</Text>

        <View style={{ width: '100%' }}>
          <FlatList
            data={todos}
            renderItem={renderTodo}
            keyExtractor={item => item}
          /> 
        </View>
      </View>

      <View style={styles.input_container}>
        <TextInput style={styles.input} onChangeText={(text) => {
          setTodo(text);
        }} />
        <Button title='Add' onPress={() => {
          setTodos([...todos, todo]);
        }} />
      </View>
    </View>
  );
}

// web: display: flex;
// react native: by default, a containing element is flex.
// [ input <-> pressable ]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', 
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 0.4,
    backgroundColor: 'purple',
    width: '100%',
    textAlign: 'center',
    paddingVertical: 8,
    color: '#fff',
  },
  input_container: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    gap: 10,
    backgroundColor: '#ccc',
    padding: 10,
  },
  input: {
    borderWidth: 1.5,
    borderColor: '#000',
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 5,
    flex: 1,
  },
  btn: {
    backgroundColor: 'skyblue',
    paddingHorizontal: 8,
    paddingTop: 5,
    borderRadius: 5,
  },
  todo_text_container: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 5,
  },
  todo_text: {
    width: '95%',
    padding: 10,
    backgroundColor: 'pink',
    borderRadius: 10,
  },
});