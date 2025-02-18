import { Appearance, StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import TodoItem from "@/components/TodoItem";
import { FlatList } from "react-native";

export default function TabOneScreen() {
  const styles = createStyles(Appearance.getColorScheme() ?? "light");
  type Todo = {
    id: number;
    text: string;
    completed: boolean;
  };

  const initialTodos: Todo[] = [
    { id: 20, text: "Learn TypeScript", completed: false },
    { id: 19, text: "Write Code", completed: true },
    { id: 18, text: "Read Documentation", completed: false },
    { id: 17, text: "Review Pull Requests", completed: true },
    { id: 16, text: "Refactor Code", completed: false },
    { id: 15, text: "Test Application", completed: true },
    { id: 14, text: "Deploy to Production", completed: false },
    { id: 13, text: "Fix Bugs", completed: true },
    { id: 12, text: "Update Dependencies", completed: false },
    { id: 11, text: "Optimize Performance", completed: true },
    { id: 10, text: "Write Unit Tests", completed: false },
    { id: 9, text: "Write Integration Tests", completed: true },
    { id: 8, text: "Document API", completed: false },
    { id: 7, text: "Create Mock Data", completed: true },
    { id: 6, text: "Design UI", completed: false },
    { id: 5, text: "Implement Features", completed: true },
    { id: 4, text: "Code Review", completed: false },
    { id: 3, text: "Learn New Framework", completed: true },
    { id: 2, text: "Attend Meeting", completed: false },
    { id: 1, text: "Plan Sprint", completed: true },
  ];

  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: todos.length ? todos[0].id + 1 : 1,
      text,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

  const updateTodo = (id: number, updatedText: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: updatedText } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodoCompletion = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
      <View style={styles.separator} />
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TodoItem
            id={item.id}
            text={item.text}
            completed={item.completed}
            onDelete={deleteTodo}
            onUpdate={updateTodo}
            toggleTodoCompletion={toggleTodoCompletion}
          />
        )}
      />
    </SafeAreaView>
  );
}

const createStyles = (colorScheme: string) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      width: "80%",
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: "80%",
      backgroundColor:
        colorScheme === "dark" ? "rgba(255,255,255,0.5)" : "#000",
    },
  });
