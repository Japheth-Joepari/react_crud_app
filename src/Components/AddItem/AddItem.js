export default function AddItem({
  userInput,
  newItem,
  handleData,
  editing,
  handleUpdateData,
}) {
  const handleInputChange = (event) => {
    newItem(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleData();
  };

  const handleFormUpdate = (event) => {
    event.preventDefault();
    handleUpdateData();
  };
  return (
    <div>
      {editing ? (
        <form className="task-input" onSubmit={handleFormUpdate}>
          <ion-icon name="create-outline"></ion-icon>
          <input
            type="text"
            placeholder="Edit Task + Enter to save"
            onChange={handleInputChange}
            value={userInput}
          />
        </form>
      ) : (
        <form className="task-input" onSubmit={handleFormSubmit}>
          <ion-icon name="create-outline"></ion-icon>
          <input
            type="text"
            placeholder="Add a New Task + Enter"
            onChange={handleInputChange}
            value={userInput}
          />
        </form>
      )}
    </div>
  );
}
