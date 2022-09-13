import React from "react";
import { useState } from "react";

// styles
import styles from "./FieldInputCheckbox.module.scss";

// interface
interface IFieldInputCheckbox {
    id: string;
    name: string;
    label: string;
    onChange: (e: any)=>void;
    error: boolean;
    checked: boolean;
}

const FieldInputCheckbox: React.FC<IFieldInputCheckbox> = ({
       id,
       name,
       label,
       onChange,
       error,
        checked
   }) => {



    let containerClass = `${styles.container}`;

    if (error) {
        containerClass += ` ${styles.containerError}`;
    }

    return (
        <label className={containerClass} >
            {label}
            <input
                id={id}
                name={name}
                type="checkbox"
                defaultChecked={checked}
                onChange={onChange}
            />
            <span className={styles.checkmark} />
        </label>

    );
}

export default FieldInputCheckbox;