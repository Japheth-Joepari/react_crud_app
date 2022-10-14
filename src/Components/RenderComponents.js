import AddItem from "./AddItem/AddItem";
import { todo } from "./todos";
import { useState } from "react";
import TodoItems from "./TodoItems/TodoItems";
import ErrorModal from "./UI/ErrorModal";
import { useEffect } from "react";

export default function RenderComponents() {
  // checks if the items are in the localstorage
  const [todos, setTodos] = useState(() => {
    const todoStorage = localStorage.getItem("todos");
    if (todoStorage) {
      return JSON.parse(todoStorage);
    } else {
      return todo;
    }
  });
  const [userInput, setUserInput] = useState("");
  const [todoId, setId] = useState("");
  const [editing, isEditing] = useState(false);
  const [error, setError] = useState();
  const [id, sId] = useState();
  const [filtered, setFiltered] = useState(todos);

  // sets data by default to localStorage and effects changes on every click
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const newItem = (event) => {
    setUserInput(event);
  };

  const handleData = () => {
    if (userInput !== "") {
      const duplicateTodo = todos.find((todo) => {
        const check = userInput === todo.description ? true : false;
        return check;
      });

      const formData = {
        id: Math.random().toString(),
        description: userInput,
        pending: true,
        completed: false,
      };

      !duplicateTodo
        ? setTodos((prevState) => {
            return [formData, ...prevState];
          })
        : console.warn("Already in database");
      setUserInput("");
    }
  };

  //Deleting item
  const handleDeletedItem = (id, description) => {
    sId(id);
    setError({
      title: "Delete ?",
      message: `Are you sure that you want to delete  "${description}" ?`,
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

  const handleDeletedAllItem = () => {
    setTodos([]);
  };

  const handleFilterChange = (values) => {
    setFiltered(values);
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
          filtered={filtered}
          handleEditedItem={handleEditedItem}
          handleDeletedItem={handleDeletedItem}
          handleCompleteItem={handleCompletedItem}
          handleDeletedAllItem={handleDeletedAllItem}
          handleFilterChange={handleFilterChange}
        />
      </div>
    </div>
  );
}
