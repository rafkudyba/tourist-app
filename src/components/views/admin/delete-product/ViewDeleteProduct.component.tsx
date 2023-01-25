import {FC, useEffect, useState} from 'react';

import styles from './ViewDeleteProduct.module.scss';

import dynamic from 'next/dynamic';
import FieldInputText from '@/components/design-system/fields/field-inputs/field-input-text/FieldInputText.component';
import {data, errorMessages, isValid, regexes, showErrors} from './ViewDeleteProduct.data';
import {useFormHook} from '@/components/form/form.hook';
import ButtonSubmit from '@/components/design-system/button/button-submit/ButtonSubmit.component';
import {MUTATION_CREATE_PRODUCT} from '@/api/mutation/MutationCreateProduct';
import {useMutation} from '@apollo/client';
import {MUTATION_UPDATE_PRODUCT} from '@/api/mutation/MutationUpdateProduct';
import {MUTATION_DELETE_PRODUCT} from '@/api/mutation/MutationDeleteProduct';

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

const ViewDeleteProductComponent: FC = ({children}) => {

    const [mutateFunction, response] = useMutation(MUTATION_DELETE_PRODUCT);
    const {onChange, formErrors, showError, isFormValid} = useFormHook(data, isValid, showErrors, regexes);

    const onFormSubmit = async (e: Event) => {
        e.preventDefault()
        showError()
        if (isFormValid) {

            await mutateFunction({variables: {id: data.id}})
        }
    }


    return (
        <div className={styles.mainWr}>
            <h1 className={styles.formHeader}>Usuń produkt</h1>
            <form className={styles.contentWrapper}>
                <FieldInputText
                    label="Id"
                    id="1"
                    name="id"
                    value={data.id}
                    onChange={onChange}
                    placeholder="ID"
                    error={formErrors.id}
                    errorMessage={errorMessages.id}
                />
            </form>

            <div className={styles.buttonWr}>
                <ButtonSubmit
                    name={"Usuń produkt"}
                    onClick={onFormSubmit}
                />
            </div>
        </div>
    );
}

export default ViewDeleteProductComponent;

