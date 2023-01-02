import React, {ChangeEvent, useState} from 'react';

export const useFormHook = (
    data: Record<string, string>,
    isValid: Record<string, boolean>,
    showErrors: Record<string, boolean>,
    regexes: Record<string, RegExp | undefined>
) => {
    const [validation, setValidation] = useState(false);

    const [formState, setFormState] = useState(data);
    const [formErrors, setFormErrors] = useState(showErrors);

    const [isFormValid, setIsFormValid] = useState(false)

    const checkForm = () => {
        for (let key in isValid) {
            if (isValid[key]) {
                setIsFormValid(true);
            } else {
                setIsFormValid(false);
                break;
            }
        }
    }

    const changeFormState = (name: string, value: string) => {
        setFormState(prevState => ({
            ...prevState,
            [name]: value
        }))

    }
    const changeFormErrors = (name: string, value: boolean) => {
        setFormErrors(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {value, name} = e.target;
        changeFormState(name, value)
        const regex = regexes[name];
        if (regex) {
            regex.test(value)
                ? isValid[name] = true
                : isValid[name] = false;
        } else {
            isValid[name] = true;
        }

        if (validation){
            if (regex) {
                regex.test(value)
                    ? changeFormErrors(name, false)
                    : changeFormErrors(name, true);
            } else {
                changeFormErrors(name, false);
            }
        }
        checkForm();
    }

    const showError = () => {
        for (let key in isValid) {
            (!isValid[key] && regexes[key])
                ? changeFormErrors(key, true)
                : changeFormErrors(key, false);
            data[key] = formState[key];
        }
        setValidation(true);
    }

    return {onChange, formErrors, showError, isFormValid}
}