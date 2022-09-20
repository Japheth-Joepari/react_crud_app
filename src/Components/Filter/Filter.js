import TodoItems from "../TodoItems/TodoItems";

export default function Filter({
  onChangeFilter,
  selected,
  todos,
  handleDeleteItems,
}) {
  const dropdownChangeHandler = (e) => {
    onChangeFilter(e.target.value);
  };

  const hanDeleteAll = (e) => {
    // confirm("Delete all ?");
    handleDeleteItems();
  };
  return (
    <div>
      <div className="controls">
        <select
          value={selected}
          className="select"
          onChange={dropdownChangeHandler}
        >
          <option value={todos}>All</option>
          <option value="true">Pending</option>
          <option value="false"> Completed</option>
        </select>

        <button className="clear-btn" onClick={hanDeleteAll}>
          Clear All
        </button>
      </div>
    </div>
  );
}
