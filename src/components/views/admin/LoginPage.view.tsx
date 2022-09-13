import { FC } from 'react';

// Styles
import styles from './LoginPage.module.scss'
import FieldInputText from '@/components/design-system/fields/field-inputs/field-input-text/FieldInputText.component';
import {useFormHook} from '@/components/form/form.hook';
import {data, isValid} from '@/components/form/data/login-form.data';
import FieldInputCheckbox
    from '@/components/design-system/fields/field-inputs/field-input-checkbox/FieldInputCheckbox.component';
import LinkButton from '@/components/design-system/links/link-button/LinkButton.component';

const LoginPageView: FC = ({children}) => {

    const {onChange, formErrors, nameError, onChangeEmail, emailError, onChangePhone, phoneError, onChangeCheckbox, checkboxError, showError} = useFormHook();
    return (
        <div className={styles.wrapper}>
            <div className={styles.btnWrapper}>
                <form>
                    <FieldInputText
                        label="Name and Surname"
                        id="1"
                        name="name"
                        value={data.name}
                        onChange={onChange}
                        placeholder="1"
                        error={formErrors.name}
                    />
                    <FieldInputText
                        label="Email"
                        id="1"
                        name="1"
                        value={data.email}
                        onChange={onChangeEmail}
                        placeholder="1"
                        error={emailError}
                    />
                    <FieldInputText
                        label="Phone"
                        id="1"
                        name="1"
                        value={data.phone}
                        onChange={onChangePhone}
                        placeholder="1"
                        error={phoneError}
                    />
                    <FieldInputCheckbox
                        id="2"
                        name="2"
                        label="Zgoda"
                        checked={data.agreement}
                        onChange={onChangeCheckbox}
                        error={checkboxError}
                    />
                    <button
                        style={{width: '100px', height: '30px', background: 'red'}}
                        name="NEXT"
                        onClick={showError}
                    />
                    {/*<FieldInputText name={"login"} id={"login"} placeholder={"login"} label={"Login"} value={}/>*/}
                </form>
            </div>

        </div>
    );
}

export default LoginPageView;

