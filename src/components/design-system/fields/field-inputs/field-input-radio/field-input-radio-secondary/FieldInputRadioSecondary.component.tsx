import React from "react";

// styles
import styles from "./FieldInputRadioSecondary.module.scss";

// interface
interface IFieldInputRadio2 {
    id: string;
    name: string;
    label: string;
    error: boolean;
    onChange: (e: any)=>void;
    value: string;
    defaultValue: string;
}

const FieldInputRadioSecondary: React.FC<IFieldInputRadio2> = ({
         id,
         name,
         label,
         error,
        value,
        defaultValue,
        onChange
    }) => {

    let checked;
    {defaultValue === value ? checked = true : checked = false}

    let containerClass = `${styles.container}`

    if (error) {
        containerClass += ` ${styles.containerError}`;
    }

    return (
        <label className={containerClass} >
            {label}
            <input
                id={id}
                name={name}
                type="radio"
                value={value}
                onChange={onChange}
                defaultChecked={checked}
            />
            <span className={styles.checkmark} />

        </label>
    );
}

export default FieldInputRadioSecondary;