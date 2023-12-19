// App.js

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView, // Added SafeAreaView
} from 'react-native';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';
import store from './store';
import { addTodo, toggleTodo, deleteTodo } from './actions';

const TodoApp = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const [newTodo, setNewTodo] = useState('');
  const [editingTodo, setEditingTodo] = useState(null);

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      dispatch(addTodo(newTodo));
      setNewTodo('');
    }
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
    setEditingTodo(null);
  };

  const renderItem = ({ item }) => (
    <View style={styles.todoItemContainer}>
      <Text
        style={[
          styles.todoText,
          { textDecorationLine: item.completed ? 'line-through' : 'none' },
        ]}
      >
        {item.text}
      </Text>
      <TouchableOpacity onPress={() => handleToggleTodo(item.id)}>
        <AntDesign
          name={item.completed ? 'checkcircle' : 'checkcircleo'}
          size={24}
          color="green"
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleDeleteTodo(item.id)}>
        <AntDesign name="delete" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.headingText}>TODO List</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a new todo..."
          placeholderTextColor="gray"
          value={newTodo}
          onChangeText={(text) => setNewTodo(text)}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddTodo}>
          <Text style={styles.addButtonText}>Add Todo</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    width: '100%', // Takes the entire width
    backgroundColor: 'cadetblue',
    padding: 10,
    alignItems: 'center',
  },
  headingText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    borderRadius: 5,
  },
  addButton: {
    backgroundColor: 'lightcoral',
    borderRadius: 5,
    marginLeft: 10,
    padding: 10,
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  todoItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  todoText: {
    flex: 1,
    marginHorizontal: 10,
  },
});

export default App;
