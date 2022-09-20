import AddItem from "./AddItem/AddItem";
import { todo } from "./todos";
import { useState } from "react";
import TodoItems from "./TodoItems/TodoItems";

export default function RenderComponents() {
  const [todos, setTodos] = useState(todo);
  const [userInput, setUserInput] = useState("");
  const [todoId, setId] = useState("");
  const [editing, isEditing] = useState(false);

  const newItem = (event) => {
    setUserInput(event);
  };

  const handleData = () => {
    if (userInput !== "") {
      const formData = {
        id: Math.random().toString(),
        description: userInput,
        pending: true,
        completed: false,
      };
      todos.unshift(formData);
      setUserInput("");
    }
  };

  //Deleting item
  const handleDeletedItem = (todoId) => {
    const todoFilter = todos.filter((todo) => {
      return todo.id !== todoId;
    });
    setTodos(todoFilter);
  };

  //handleCOmpleted items
  const handleCompletedItem = (completedItems) => {
    setTodos(
      todos.map((todo) =>
        todo === completedItems
          ? { ...todo, completed: !todo.completed, pending: !todo.pending }
          : todo
      )
    );
  };

  const handleUpdateData = () => {
    if (userInput !== "") {
      console.log("updating");
      setTodos(
        todos.map((todo) =>
          todo === todoId ? { ...todo, description: userInput } : todo
        )
      );
      console.log(todos);
    }
    isEditing(false);
    setUserInput("");
    setId("");
  };

  const handleEditedItem = (id, description) => {
    isEditing(true);
    setId(id);
    setUserInput(description);
  };

  return (
    <div className="wrapper">
      <h1 className="txt">Task Manager</h1>
      <AddItem
        handleUpdateData={handleUpdateData}
        editing={editing}
        newItem={newItem}
        userInput={userInput}
        handleData={handleData}
      />

      <TodoItems
        editing={editing}
        todos={todos}
        handleEditedItem={handleEditedItem}
        handleDeletedItem={handleDeletedItem}
        handleCompleteItem={handleCompletedItem}
      />
    </div>
  );
}
