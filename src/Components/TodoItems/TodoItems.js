import TodoItem from "../TodoItem/TodoItem";
import Filter from "../Filter/Filter";

function TodoItems({
  todos,
  filtered,
  handleCompletedTodos,
  handleDeletedItem,
  handleCompleteItem,
  handleEditedItem,
  handleDeletedAllItem,
  handleFilterChange,
}) {
  const handleCompleted = (completed) => {
    handleCompletedTodos(completed);
  };

  const hanDelete = (id, description) => {
    handleDeletedItem(id, description);
  };

  const hanCompleted = (complete) => {
    handleCompleteItem(complete);
  };

  const handleEdited = (id, description) => {
    handleEditedItem(id, description);
  };

  const onChangeFilter = (values) => {
    handleFilterChange(values);
  };

  let filteredItem = todos.filter((todo) => {
    if (filtered === "true" || filtered === "false") {
      return todo.pending.toString() === filtered;
    }
    return todo;
  });

  const handleDeleteAll = () => {
    handleDeletedAllItem();
  };

  return (
    <div>
      <Filter
        todos={todos}
        onChangeFilter={onChangeFilter}
        handleDeleteItems={handleDeleteAll}
      />

      {filteredItem.length > 0 ? (
        filteredItem.map((todo, i) => {
          return (
            <TodoItem
              key={todo.id}
              completed={todo.completed}
              description={todo.description}
              todo={todo}
              handleCompleted={handleCompleted}
              pending={todo.pending}
              id={todo.id}
              hanDeleted={hanDelete}
              hanComplete={hanCompleted}
              handleEdited={handleEdited}
            />
          );
        })
      ) : (
        <h4 className="txt1">No todos found</h4>
      )}
    </div>
  );
}
export default TodoItems;
