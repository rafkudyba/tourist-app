import React from "react";

// styles
import styles from "./FieldInputRadioPrimary.module.scss";

// interface
interface IFieldInputRadio1 {
    id: string;
    name: string;
    label: string;
    error: boolean;
    onChange: (e: any)=> void;
    value: string;
    defaultValue?: string;
}

const FieldInputRadioPrimary: React.FC<IFieldInputRadio1> = ({
         id,
         name,
         label,
         error,
         onChange,
         value,
       defaultValue
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

export default FieldInputRadioPrimary;