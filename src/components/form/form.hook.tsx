import React, {useState} from "react";

//data
import {data, isValid} from './data/login-form.data';

export const useFormHook = () => {
    const [validation, setValidation] = useState(false);

    const [formState, setFormState] = useState({
        name: data.name,
        email: data.email,
        phone: data.phone,
        agreement: data.agreement
    });
    const [formErrors, setFormErrors] = useState({
        name: false,
        email: false,
        phone: false,
        checkbox: false
    });

    const [nameState, setNameState] = useState(data.name);
    const [emailState, setEmailState] = useState(data.email);
    const [phoneState, setPhoneState] = useState(data.phone);
    const [checkboxState, setCheckboxState] = useState(data.agreement);

    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
    const [checkboxError, setCheckboxError] = useState(false);

    const reName = /^[a-zA-z]{2,} [a-zA-z]{2,}$/;
    const reEmail = /^([a-zA-Z0-9\-\.]+)@([a-zA-Z0-9\-\.]+)\.([a-zA-Z]{2,5})$/;
    const rePhone = /^[0-9]{9,}$/;

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

    // const store = (name: string, value: string) => {
    //     setNameState[name] = value;
    // }
    const storeEmail = (email: string) => {
        setEmailState(email);
    }
    const storePhone = (phone: string) => {
        setPhoneState(phone);
    }
    const storeCheckbox = (checkbox: boolean) => {
        setCheckboxState(checkbox);
    }

    const onChange = (e: any) => {
        const {value, name} = e.target;
        changeFormState(name, value)
        reName.test(value) ? isValid.name = true : isValid.name = false;

        if (validation){
            reName.test(value) ? changeFormErrors(name, false) : changeFormErrors(name, true);
        }
    }

    const onChangeEmail = (e: any) => {
        let email = e.target.value;
        storeEmail(email);
        reEmail.test(email) ? isValid.email = true : isValid.email = false;

        if(validation){
            reEmail.test(email) ? setEmailError(false) : setEmailError(true);
        }
    }

    const onChangePhone = (e: any) => {
        let phone = e.target.value;
        storePhone(phone);
        rePhone.test(phone) ? isValid.phone = true : isValid.phone = false;

        if(validation){
            rePhone.test(phone) ? setPhoneError(false) : setPhoneError(true);
        }
    }

    const onChangeCheckbox = (e: any) => {
        let checkbox = e.target.checked;
        storeCheckbox(checkbox);
        checkbox ? isValid.checkbox = true : isValid.checkbox = false;

        if(validation){
            checkbox ? setCheckboxError(false) : setCheckboxError(true);
        }
    }

    const showError = (e: any) => {
        e.preventDefault()
        !isValid.name ? changeFormErrors('name', true) : changeFormErrors('name', false);
        !isValid.email ? setEmailError(true) : setEmailError(false);
        !isValid.phone ? setPhoneError(true) : setPhoneError(false);
        !isValid.checkbox ? setCheckboxError(true) : setCheckboxError(false);
        setValidation(true);
        data.name = formState.name;
        data.email = formState.email;
        data.phone = formState.phone;
        data.agreement = formState.agreement;
    }

    return {onChange, formErrors, nameError, onChangeEmail, emailError, onChangePhone, phoneError, onChangeCheckbox, checkboxError, showError}
}