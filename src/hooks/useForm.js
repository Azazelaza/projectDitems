import { useState } from "react";

export const useForm = (initialState = {}) => {
    const [values, setValues] = useState({ ...initialState, errors: {} });

    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.value
        });
        if (values.errors[target.name]) {
            delete values.errors[target.name];
        }
    };
    const handleInputChangeUpperCase = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.value.toUpperCase()
        });
        if (values.errors[target.name]) {
            delete values.errors[target.name];
        }
    };
    const handleInputChangeLowerCase = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.value.toLowerCase(),
        });
        if (values.errors[target.name]) {
            delete values.errors[target.name];
        }
    };

    const reset = () => setValues(initialState);

    const setInputValue = (attribute, value) => {
        setValues({
            ...values,
            [attribute]: value
        });
        if (values.errors[attribute]) {
            delete values.errors[attribute];
        }
    };

    const setErrors = errors => {
        setValues({
            ...values,
            errors
        });
    };

    const setFormValues = (attributes = {}) => {
        setValues({
            ...values,
            ...attributes
        });

        values.errors = {};
    };

    return {
        values,
        handleInputChange,
        reset,
        setInputValue,
        setErrors,
        setFormValues,
        handleInputChangeUpperCase,
        handleInputChangeLowerCase,
        errors: values.errors,
        allForm: values
    };
};