import { useDispatch } from "react-redux";
import { onAuthStateChanged } from 'firebase/auth';
import { FirebaseAuth } from '../firebase/config';
import { login, logout } from '../redux/slices/authSlice';
import { useEffect } from "react";

export const useCheckAuth = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        onAuthStateChanged(FirebaseAuth, async (user) => {
            if (!user) return dispatch(logout());
            dispatch(login(user));
        })
    }, []);

    return { status: true }
}
