import { useState } from "react";
import Zoom from "@material-ui/core/Zoom";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

function CreateArea(props) {
  const [areaStatus, setStatus] = useState(false);
  function handleArea() {
    setStatus(true);
  }

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {areaStatus ? (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        ) : (
          <></>
        )}
        <textarea
          name="content"
          onClick={handleArea}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={areaStatus ? "4" : "1"}
        />
        <Zoom in={areaStatus}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
