import {FC, useState} from 'react';

// Styles
import styles from './LoginPage.module.scss'

// Components
import FieldInputText from '@/components/design-system/fields/field-inputs/field-input-text/FieldInputText.component';
import {useFormHook} from '@/components/form/form.hook';
import LinkButton from '@/components/design-system/links/link-button/LinkButton.component';

// Form data
import {
    data,
    isValid,
    regexes,
    showErrors,
    errorMessages
} from './LoginPage.data';

//Graphql
import {useMutation} from '@apollo/client';
import {useRouter} from 'next/router';
import axios from 'axios';

const LoginPageView: FC = () => {
    const router = useRouter();
    const [areCredentialsCorrect, setAreCredentialsCorrect] = useState(true);
    const [token, setToken] = useState('');
    const {
        onChange,
        formErrors,
        showError,
        isFormValid
    } = useFormHook(
        data,
        isValid,
        showErrors,
        regexes);

    const saveTokenInStorage = (token: string) => {
        localStorage.setItem('token', token);
    }

    const onLoginClick = (e: Event) => {
        e.preventDefault()
        showError()
        if (isFormValid) {
                if (true) {
                    axios.post('http://localhost:8081/api/auth/signin', {
                        
                            "username": data.username,
                            "password": data.password
                          
                    }).then((res) => {
                        setAreCredentialsCorrect(true)
                        setToken('asd');
                        saveTokenInStorage(res.data.accessToken)
                        router.push('add-product')
                        console.log(res)
                    }).catch(console.error)
                    setAreCredentialsCorrect(true)
                    // setToken('asd');

                } else {
                }
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.formWrapper}>
                <h2 className={styles.formHeader} >Zaloguj się</h2>
                <form>
                    {!areCredentialsCorrect ?
                    <h2> Niepoprawny login lub hasło!</h2> : null}
                    <FieldInputText
                        label="Nazwa użytkownika"
                        id="1"
                        name="username"
                        value={data.username}
                        onChange={onChange}
                        placeholder="Tutaj wpisz swoją nazwę użytkownika"
                        error={formErrors.username}
                        errorMessage={errorMessages.username}
                    />
                    <FieldInputText
                        label="Hasło"
                        id="1"
                        name="password"
                        type='password'
                        value={data.password}
                        onChange={(event) =>onChange(event)}
                        placeholder="Tutaj wpisz swoje hasło"
                        error={formErrors.password}
                        errorMessage={errorMessages.password}
                    />
                    <div className={styles.buttonWr}>
                        <LinkButton
                            href="/"
                            name="Wróć do strony"
                            type="secondary"
                        />
                        <LinkButton
                            href={"#"}
                            name="Zaloguj"
                            onClick={onLoginClick}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginPageView;

