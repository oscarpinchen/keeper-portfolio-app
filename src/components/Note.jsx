import DeleteIcon from "@material-ui/icons/Delete";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  console.log(props);

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button className="delete" onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
