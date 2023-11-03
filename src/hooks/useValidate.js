export const useValidate = ({ values, type, errorsInput }) => {
    errorsInput = [];

    if (type === 'login') {
        if (values.email == "" || values.password == "") {
            if (values.email == "") {
                errorsInput.push('No se relleno el campo email')
            }
            if (values.password == "") {
                errorsInput.push("No se relleno el campo contraseña")
            }
            return {
                isValid: false,
                errorsInput
            }
        }
    }

    if (type === 'register') {
        if (values.email == "" || values.password == "" || values.confirmation_password == "") {
            if (values.email == "") {
                errorsInput.push('No se relleno el campo email')
            }
            if (values.password == "") {
                errorsInput.push("No se relleno el campo contraseña")
            }
            if (values.confirmation_password == "") {
                errorsInput.push("No se relleno el campo confirmar contraseña")
            }
            return {
                isValid: false,
                errorsInput
            }
        }
        if (values.password != values.confirmation_password) {
            errorsInput.push("Las contraseñas no coinciden")
            return {
                isValid: false,
                errorsInput
            }
        }
        if (values.password.length <= 6) {
            errorsInput.push("La contraseña debe tener mas de 6 caracteres")
            return {
                isValid: false,
                errorsInput
            }
        }
    }

    return {
        isValid: true,
    }
}
