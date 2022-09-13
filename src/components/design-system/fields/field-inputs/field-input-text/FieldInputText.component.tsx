import React from 'react';

// styles
import styles from './FieldInputText.module.scss';

// interface
interface IFieldInputText {
    label: string;
    id: string;
    name: string;
    placeholder: string;
    error: boolean;
    onChange: (e: any) => void;
    value: string;
    errorMessage?: string;
}

const FieldInputText: React.FC<IFieldInputText> = ({
                                                       label,
                                                       id,
                                                       name,
                                                       placeholder,
                                                       error,
                                                       onChange,
                                                       value,
                                                       errorMessage
                                                   }) => {

    let inputClass = `${styles.input}`;

    if (error) {
        inputClass += ` ${styles.error}`;
    }

    return (
        <div className={styles.inputWr}>
            <label
                className={styles.label}
                htmlFor={id}
            >
                {label}
            </label>
            <input
                id={id}
                name={name}
                defaultValue={value}
                placeholder={placeholder}
                onChange={onChange}
                className={inputClass}
            />
            {error && <div className={styles.errorMessage}>{errorMessage}</div>}

        </div>
    );
}

export default FieldInputText;