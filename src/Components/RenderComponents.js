import AddItem from "./AddItem/AddItem";
import { todo } from "./todos";
import { useState } from "react";
import TodoItems from "./TodoItems/TodoItems";
import ErrorModal from "./UI/ErrorModal";

export default function RenderComponents() {
  const [todos, setTodos] = useState(todo);
  const [userInput, setUserInput] = useState("");
  const [todoId, setId] = useState("");
  const [editing, isEditing] = useState(false);
  const [error, setError] = useState();
  const [id, sId] = useState();

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
    sId(todoId);
    setError({
      title: "Delete ?",
      message: "Are you sure that you want to delete item",
    });
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

  const handleDItem = () => {
    const todoFilter = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(todoFilter);
    setError(false);
  };

  const handleBackDropItem = () => {
    setError(false);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          handleDItem={handleDItem}
          title={error.title}
          message={error.message}
          handleBackDropItem={handleBackDropItem}
        />
      )}
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
    </div>
  );
}
