import React, { useContext } from "react";
import { AlertContext } from "../context/alert/alertContext";
import { CSSTransition } from "react-transition-group";

export const Alert = () => {
    const { alert, hide } = useContext(AlertContext);

    return (
        <CSSTransition
            in={alert.visible}
            timeout={{
                enter: 500,
                exit: 1000
            }}
            classNames={'alert'}
            mountOnEnter
            unmountOnExit
        >
            <div className={`alert alert-${alert.type} alert-dismissible`}>
                {alert.text}
                <button
                    onClick={hide}
                    type="button"
                    className="btn-close"
                    aria-label="Закрыть"
                ></button>
            </div>
        </CSSTransition>
    );
};
