import { useState } from react;

const noteState = async (props) => {
    const host = `127.0.0.1:5000`;
    const notesInitial = [];
    const [notes, setNotes] = useState(notesInitial);

    //add note
    const addNoteContext = async (title, description, tag) => {
        const response = await fetch(`${host}/notes/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'token': localStorage.getItem('token')
            },
            body: JSON.stringify({title, description, tag})
        });
        const jsonReceived = await response.json();

        //client side
        const newNote = jsonReceived;
        setNotes(notes.concat(newNote));
    };

    //edit a note
    const editNoteContext = async (title, description, tag, id) => {
        const response = await fetch(`${host}/notes/edit/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'token': localStorage.getItem('token')
            },
            body: JSON.stringify({title, description, tag})
        });
        const jsonReceived = await response.json();

        //CS

    };
    const delelteNoteContext = async (title, description, tag, id) => {
        const response = await fetch(`${host}/notes/edit/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'token': localStorage.getItem('token')
            },
            body: JSON.stringify({title, description, tag})
        });
        const jsonReceived = await response.json();

        //CS

    }
}