import React, {useState} from "react";

//data
import {data, isValid} from './data/login-form.data';

export const useFormsHook = () => {
    const [showErrors, setShowErrors] = useState(false);

    // const [formState, setFormState] = useState(data);
    const [formErrors, setFormErrors] = useState(isValid);

    const reName = /^[a-zA-z]{2,} [a-zA-z]{2,}$/;
    const reEmail = /^([a-zA-Z0-9\-\.]+)@([a-zA-Z0-9\-\.]+)\.([a-zA-Z]{2,5})$/;
    const rePhone = /^[0-9]{9,}$/;

    // const changeFormState = (name: string, value: string) => {
    //     let state: any = formState;
    //     state[name] = value;
    //     setFormState(state);
    //
    // }
    const changeFormErrors = (name: string, value: boolean) => {
        let state: any = formErrors;
        state[name] = value;
        setFormErrors(state);

    }

    // const store = (name: string) => {
    //     setNameState(name);
    // }
    // const storeEmail = (email: string) => {
    //     setEmailState(email);
    // }
    // const storePhone = (phone: string) => {
    //     setPhoneState(phone);
    // }
    // const storeCheckbox = (checkbox: boolean) => {
    //     setCheckboxState(checkbox);
    // }

    const onChange = (e: any) => {
        // let state: any = formState;
        // let errors: any = formErrors;
        const {value, name} = e.target;
        // const name = e.target.value;
        // state[e.target.name] = value;
        // setFormState(state);
        data[name] = value;
        reName.test(value) ? changeFormErrors(name, false) : changeFormErrors(name, true);
        console.log('data', data)
        console.log('isValid', isValid)
        // storeName(name);
        // console.log('isValid', isValid)
        // console.log('errors', errors)
        // if (showErrors){
        //     reName.test(value) ? errors[name] = false : errors[name] = true;
        //     console.log('isValid',isValid)
        //     console.log('errors', errors)
        //     setFormErrors(errors);
        // }
    }

    // const onChangeEmail = (e: any) => {
    //     let email = e.target.value;
    //     storeEmail(email);
    //     reEmail.test(email) ? isValid.email = true : isValid.email = false;
    //
    //     if(validation){
    //         reEmail.test(email) ? setEmailError(false) : setEmailError(true);
    //     }
    // }
    //
    // const onChangePhone = (e: any) => {
    //     let phone = e.target.value;
    //     storePhone(phone);
    //     rePhone.test(phone) ? isValid.phone = true : isValid.phone = false;
    //
    //     if(validation){
    //         rePhone.test(phone) ? setPhoneError(false) : setPhoneError(true);
    //     }
    // }
    //
    // const onChangeCheckbox = (e: any) => {
    //     let checkbox = e.target.checked;
    //     storeCheckbox(checkbox);
    //     checkbox ? isValid.checkbox = true : isValid.checkbox = false;
    //
    //     if(validation){
    //         checkbox ? setCheckboxError(false) : setCheckboxError(true);
    //     }
    // }

    const showError = (e: any) => {
        e.preventDefault()
        // let errors = formErrors;
        // console.log('isValid',isValid)
        // console.log('errors', errors)
        // !isValid.name ? errors.name = true : errors.name = false;
        // console.log('isValid',isValid)
        // console.log('errors', errors)
        // setFormErrors(errors)
        setShowErrors(true);
        // data.name = formState.name;
        // data.email = formState.email;
        // data.phone = formState.phone;
        // data.agreement = formState.agreement;
        // if (isValid.name) {
        //     console.log('dalej')
        //     console.log('isValid',isValid)
        //     console.log('errors', errors)
        // }
    }

    return {onChange, formErrors,  showErrors, showError}
}