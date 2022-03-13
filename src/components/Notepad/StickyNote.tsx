import { useState, useEffect, useContext } from "react";
import { EditTextarea } from "react-edit-text";
import "react-edit-text/dist/index.css";
import "./StickyNote.css";
import { getNotepadData } from "../../services/AppService";
import { updateNotepadData } from "../../services/AppService";
import AuthContext from "../../context/auth-context";
import { getCurrentUser } from "../../services/AuthService";

const StickyNote = () => {

  const ctx = useContext(AuthContext);
  const [notes, setNotes] = useState<string>(``);

  useEffect(() => {
    getNotepad();
  }, [ctx.isLoggedIn]);

  const getNotepad = () => {
    if (ctx.isLoggedIn) {
      const user = getCurrentUser();
      setNotes(`Welcome ${user.firstName}. Start typing..`);
      getNotepadData()
        .then((response) => {
          console.log(`Response: ${response.data}`);
          if (response.data?.note) {
            setNotes(response.data.note);
          }
        })
        .catch((error) => {
          console.log(error);
          setNotes("");
        });
    } else {
      setNotes("This is Dummy Data. Please login to use the full app");
    }
  };

  const updateHandler = () => {
    console.log(`Inside Update Handler, note: ${notes}`);
    updateNotepadData(notes).then((response) => {
      console.log(`Updated Successfully, User ID: ${response.data.id}`);
    });
  };
  console.log(notes);
  return (
    <div className="text-area">
      {/* <EditText /> */}
      <EditTextarea
        value={notes}
        onChange={setNotes}
        onSave={updateHandler}
        rows={9}
      />
    </div>
  );
};

export default StickyNote;
