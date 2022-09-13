import React, {useEffect} from 'react';

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
    showErrors?: boolean;
}

const FieldInputText: React.FC<IFieldInputText> = ({
                                                       label,
                                                       id,
                                                       name,
                                                       placeholder,
                                                       error,
                                                       onChange,
                                                        value,
    showErrors
                                                   }) => {

    let containerClass = `${styles.container}`;

    if (error) {
        containerClass += ` ${styles.error}`;
    }

    useEffect(() => {
        console.log(
            id,
            name,
            placeholder,
            error,
            showErrors,
            value,
            )
    }, [id,
        name,
        placeholder,
        error,
        showErrors,
        value])

    return (
        <label
            className={containerClass}
            htmlFor={id}
        >
            {label}{id}
            {name}
            {placeholder}{error}
            {showErrors}
            {value}sas
            <input
                id={id}
                name={name}
                defaultValue={value}
                placeholder={placeholder}
                onChange={onChange}
            />
        </label>
    );
}

export default FieldInputText;