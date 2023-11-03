import { loginUserWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, signInWithFacebook, signInWithGoogle } from "../../firebase/providers";
import { login, logout, renew } from "./authSlice"

export const renewAuth = (email, password) => {
    return async (dispatch) => {
        dispatch(renew());
    }
}

export const startGoogleSignIn = () => {
    return async (dispatch) => {
        dispatch(renewAuth());
        const result = await signInWithGoogle();
        if (!result.ok) return dispatch(logout(result.errorMessage));

        dispatch(login(result))
        return {
            response: true
        }
    }
}
export const startFacebookSignIn = () => {
    return async (dispatch) => {
        dispatch(renewAuth());
        const result = await signInWithFacebook();
        if (!result.ok) return dispatch(logout(result.errorMessage));

        dispatch(login(result))
        return {
            response: true
        }
    }
}

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
    return async (dispatch) => {
        dispatch(renewAuth());
        const resp = await registerUserWithEmailPassword({ email, password, dispatch });
        if (!resp.ok) return dispatch(logout(resp.errorMessage));

        dispatch(login(resp))
        return {
            response: true
        }
    }
}

export const startLoginUserWithEmailPassword = ({ email, password }) => {
    return async (dispatch) => {
        dispatch(renewAuth());
        const resp = await loginUserWithEmailPassword({ email, password, dispatch })
        if (!resp.ok) return dispatch(logout(resp.errorMessage));
        dispatch(login(resp));
        return {
            response: true
        }
    }
}

export const startLogout = () => {
    return async (dispatch) => {
        await logoutFirebase();

        window.location.href = "/"

        dispatch(logout());

    }
}