import {FC} from 'react';

import styles from './ViewDeleteProduct.module.scss';

import FieldInputText from '@/components/design-system/fields/field-inputs/field-input-text/FieldInputText.component';
import {data, errorMessages, isValid, regexes, showErrors} from './ViewDeleteProduct.data';
import {useFormHook} from '@/components/form/form.hook';
import ButtonSubmit from '@/components/design-system/button/button-submit/ButtonSubmit.component';
import axios from 'axios';

const ViewDeleteProductComponent: FC = ({children}) => {

    const {onChange, formErrors, showError, isFormValid} = useFormHook(data, isValid, showErrors, regexes);

    const onFormSubmit = async (e: Event) => {
        e.preventDefault()
        showError()
        if (isFormValid) {
            axios.delete(`http://localhost:8081/post/${data.id}/delete`, {
                headers: {
                    'Accept': '*/*',
                    'Authorization': `${localStorage.getItem('token')}`
                }
            }).then((res) => {
                console.log(res);
                data.id ="";
            })
        }
    }


    return (
        <div className={styles.mainWr}>
            <h1 className={styles.formHeader}>Usuń post</h1>
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

