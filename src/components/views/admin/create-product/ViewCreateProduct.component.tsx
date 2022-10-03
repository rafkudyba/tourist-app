import { FC } from 'react';

import styles from './ViewCreateProduct.module.scss';

import dynamic from 'next/dynamic';
import FieldInputText from '@/components/design-system/fields/field-inputs/field-input-text/FieldInputText.component';
import {data, errorMessages, isValid, regexes, showErrors} from './ViewCreateProduct.data';
import LinkButton from '@/components/design-system/links/link-button/LinkButton.component';
import {useFormHook} from '@/components/form/form.hook';

const QuillNoSSRWrapper = dynamic(import('react-quill'), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
});

const modules = {
    toolbar: [
        [{ header: '1' }, { header: '2' }, { font: [] }],
        [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [
            { list: 'ordered' },
            { list: 'bullet' },
            { indent: '-1' },
            { indent: '+1' },
        ],
        ['link', 'image', 'video'],
        ['clean'],
    ],
    clipboard: {
        // toggle to add extra line breaks when pasting HTML:
        matchVisual: false,
    },
};
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'video',
];

// // Styles
// import styles from './CreatePost.module.scss'
// import FieldInputText from '@/components/design-system/fields/field-inputs/field-input-text/FieldInputText.component';
// import {useFormHook} from '@/components/form/form.hook';
// // import {data, isValid} from '@/components/form/data/login-form.data';
// import FieldInputCheckbox
//     from '@/components/design-system/fields/field-inputs/field-input-checkbox/FieldInputCheckbox.component';
// import LinkButton from '@/components/design-system/links/link-button/LinkButton.component';
// import {data, isValid, regexes, showErrors, errorMessages} from '@/components/views/admin/login/LoginPage.data';

const ViewCreateProductComponent: FC = ({children}) => {


    const {onChange, formErrors, showError, isFormValid} = useFormHook(data, isValid, showErrors, regexes);

    return (
        <div>
            <button>
                Dodaj post
            </button>
            <form className={styles.contentWrapper}>
                <FieldInputText
                    label="Nazwa"
                    id="1"
                    name="name"
                    value={data.name}
                    onChange={onChange}
                    placeholder="Username"
                    error={formErrors.name}
                    errorMessage={errorMessages.name}
                />
                <FieldInputText
                    label="Link do portalu olx.pl"
                    id="1"
                    name="olxLink"
                    value={data.olxLink}
                    onChange={onChange}
                    placeholder="1"
                    error={formErrors.olxLink}
                    errorMessage={errorMessages.olxLink}
                />
                <div className={styles.buttonWr}>
                    <LinkButton href={"/"} name={"Wróć do strony"}  type={"secondary"} />
                    <LinkButton href={isFormValid ? "/admin" : "#"} name={"Zaloguj"} onClick={showError} />
                </div>
            </form>
        </div>


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

export default ViewCreateProductComponent;

