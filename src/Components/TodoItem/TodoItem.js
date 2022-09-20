import EditItem from "../EditItem/Edititem";

const TodoItem = ({
  completed,
  description,
  id,
  hanDeleted,
  todo,
  hanComplete,
  handleEdited,
}) => {
  const handleChange = (e) => {
    hanComplete(todo);
  };

  const handleDelete = (id) => {
    hanDeleted(id);
  };

  const handleEditedItem = (id, description) => {
    handleEdited(id, description);
  };

  return (
    <div>
      <div className="task">
        <li className="controls">
          <div className="itemsss">
            <div>
              <input
                type="checkbox"
                onChange={handleChange}
                value={completed}
              />
            </div>
            <div>
              {" "}
              <p
                className="todoss"
                style={{
                  textDecoration: completed ? "line-through" : "none ",
                }}
              >
                {description}
              </p>
            </div>
          </div>

          <EditItem
            id={id}
            todo={todo}
            handleDeleteItem={handleDelete}
            description={description}
            handleEditedItem={handleEditedItem}
          />
        </li>
      </div>
    </div>
  );
};
export default TodoItem;
