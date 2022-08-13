import Note from './Note';
import CreateNote from './CreateNote';

const NotesList = ({notes, handleAddNote, handleDeleteNote}) => {

    return (
        <div className='notes-list'>
            {notes.map((note) => (
                <Note 
                    id={note.id}
                    text={note.text} 
                    date={note.date} 
                    handleDeleteNote={handleDeleteNote}/>
            ))}
            <CreateNote 
                handleAddNote={handleAddNote}
            />
        </div>
    );
}

export default NotesList;