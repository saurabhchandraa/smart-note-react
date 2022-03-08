import { useState } from 'react';
import { EditText, EditTextarea } from 'react-edit-text';
import 'react-edit-text/dist/index.css';
import './StickyNote.css';

const StickyNote = () => {

  const [notes, setNotes] = useState('');

    return (
      <div className='text-area'>
        {/* <EditText /> */}
        <EditTextarea rows={9}/>
      </div>
    );

}

export default StickyNote;