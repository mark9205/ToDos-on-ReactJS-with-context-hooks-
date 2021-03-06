import React, { useReducer } from "react";
import { AlertContext } from "./alertContext";
import { AlertReducer } from "./alertReducer";
import { SHOW_ALERT, HIDE_ALERT } from "../types";

export const AlertState = ({ children }) => {
    const [state, dispatch] = useReducer(AlertReducer, { visible: false });

    const show = (text, type) => {
        dispatch({
            type: SHOW_ALERT,
            payload: { text, type },
        });
    };

    const hide = () => {
        dispatch({
            type: HIDE_ALERT,
        });
    };

    return (
        <AlertContext.Provider
            value={{
                show,
                hide,
                alert: state,
            }}
        >
            {children}
        </AlertContext.Provider>
    );
};
