import React, { useContext } from "react";
import { AlertContext } from "../context/alert/alertContext";
import { FirebaseContext } from "../context/firebase/firebaseContext";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export const Notes = () => {
    const { removeNote, notes } = useContext(FirebaseContext);
    const alert = useContext(AlertContext);

    const removeClick = (note) => {
        removeNote(note.id);
        alert.show(`Заметка ${note.title} была удалена`, "primary");
    };

    return (
        <TransitionGroup component="ul" className="list-group">
            {notes.map((note) => (
                <CSSTransition 
                    key={note.id}
                    classNames={'note'}
                    timeout={800}
                >
                    <li className="list-group-item note" >
                        <div>
                            <strong>{note.title}</strong>
                            <small>{note.date}</small>
                        </div>
                        <button
                            onClick={() => removeClick(note)}
                            type="button"
                            className="btn btn-danger btn-sm"
                        >
                            &times;
                        </button>
                    </li>
                </CSSTransition>
            ))}
        </TransitionGroup>
    );
};
