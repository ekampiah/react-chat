import React, { useState } from "react";
import { Text, View } from "@/components/Themed";
import { TextInput, Button } from "react-native";

interface TodoItemProps {
  id: number;
  text: string;
  completed: boolean;
  onDelete: (id: number) => void;
  onUpdate: (id: number, newText: string) => void;
  toggleTodoCompletion: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  id,
  text,
  completed,
  onDelete,
  onUpdate,
  toggleTodoCompletion,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onUpdate(id, editText);
    setIsEditing(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditText(e.target.value);
  };

  const handleToggleCompletion = () => {
    toggleTodoCompletion(id);
  };

  return (
    <View>
      {isEditing ? <TextInput value={editText} /> : <Text>{text}</Text>}
      <Button title="Delete" onPress={() => onDelete(id)} />
      {isEditing ? (
        <Button title="Save" onPress={handleSave} />
      ) : (
        <Button title="Edit" onPress={handleEdit} />
      )}
      <Button
        title={completed ? "Undo" : "Complete"}
        onPress={handleToggleCompletion}
      />
    </View>
  );
};

export default TodoItem;
