export default function EditItem({
  id,
  todo,
  handleDeleteItem,
  handleEditedItem,
  description,
}) {
  const handleDelete = (e) => {
    e.preventDefault();
    handleDeleteItem(id);
  };

  const handleEdit = (e) => {
    handleEditedItem(todo, description);
  };

  return (
    <div className="cntrl">
      <i className="fa fa-edit" onClick={handleEdit} value={description}></i>
      <i className="fa fa-trash-o" onClick={handleDelete}></i>
    </div>
  );
}
