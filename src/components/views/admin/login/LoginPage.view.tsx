import { FC } from 'react';

// Styles
import styles from './LoginPage.module.scss'
import FieldInputText from '@/components/design-system/fields/field-inputs/field-input-text/FieldInputText.component';
import {useFormHook} from '@/components/form/form.hook';
import LinkButton from '@/components/design-system/links/link-button/LinkButton.component';
import {data, isValid, regexes, showErrors, errorMessages} from '@/components/views/admin/login/LoginPage.data';

const LoginPageView: FC = () => {

    const {onChange, formErrors, showError, isFormValid} = useFormHook(data, isValid, showErrors, regexes);
    return (
        <div className={styles.wrapper}>
            <div className={styles.formWrapper}>
                <h2 className={styles.formHeader}>Zaloguj się</h2>
                <form>
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
                        <LinkButton href={"/"} name={"Wróć do strony"}  type={"secondary"} />
                        <LinkButton href={isFormValid ? "/admin/add-product" : "#"} name={"Zaloguj"} onClick={showError} />
                    </div>
                </form>
            </div>

        </div>
    );
}

export default LoginPageView;

