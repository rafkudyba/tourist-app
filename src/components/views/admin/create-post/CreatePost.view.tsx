import { FC } from 'react';

// // Styles
// import styles from './CreatePost.module.scss'
// import FieldInputText from '@/components/design-system/fields/field-inputs/field-input-text/FieldInputText.component';
// import {useFormHook} from '@/components/form/form.hook';
// // import {data, isValid} from '@/components/form/data/login-form.data';
// import FieldInputCheckbox
//     from '@/components/design-system/fields/field-inputs/field-input-checkbox/FieldInputCheckbox.component';
// import LinkButton from '@/components/design-system/links/link-button/LinkButton.component';
// import {data, isValid, regexes, showErrors, errorMessages} from '@/components/views/admin/login/LoginPage.data';

const CreatePostView: FC = ({children}) => {

    // const {onChange, formErrors, showError, isFormValid} = useFormHook(data, isValid, showErrors, regexes);

    return (
        <></>
        // <div className={styles.wrapper}>
        //     <div className={styles.formWrapper}>
        //         <form>
        //             <FieldInputText
        //                 label="Username"
        //                 id="1"
        //                 name="username"
        //                 value={data.username}
        //                 onChange={onChange}
        //                 placeholder="Username"
        //                 error={formErrors.username}
        //                 errorMessage={errorMessages.username}
        //             />
        //             <FieldInputText
        //                 label="Password"
        //                 id="1"
        //                 name="password"
        //                 value={data.password}
        //                 onChange={onChange}
        //                 placeholder="1"
        //                 error={formErrors.password}
        //                 errorMessage={errorMessages.password}
        //             />
        //             <div className={styles.buttonWr}>
        //                 <LinkButton href={"/"} name={"Wróć do strony"}  type={"secondary"} />
        //                 <LinkButton href={isFormValid ? "/admin" : "#"} name={"Zaloguj"} onClick={showError} />
        //             </div>
        //         </form>
        //     </div>
        //
        // </div>
    );
}

export default CreatePostView;

