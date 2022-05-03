import React, { Fragment, useContext, useEffect } from "react";
import { Form } from "../components/Form";
import { Notes } from "../components/Notes";
import { FirebaseContext } from "../context/firebase/firebaseContext";
import { Loader } from "../components/Loader";

export const Home = () => {
    const { loading, fetchNotes } = useContext(FirebaseContext);

    useEffect(() => {
        fetchNotes();
    }, []);

    return (
        <Fragment>
            <Form />
            <hr />
            {loading ? <Loader /> : <Notes/>}
        </Fragment>
    );
};
