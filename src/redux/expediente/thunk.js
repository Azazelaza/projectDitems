import { doc, getDoc, setDoc } from "firebase/firestore/lite";
import { clearImages, setExpediente, setImages } from "./slice";
import { FirebaseDB } from "../../firebase/config"
import Swal from "sweetalert2";

export const startShowExpediente = ({ uid }) => {
    return async (dispatch) => {
        dispatch(clearImages())
        const collectionData = doc(FirebaseDB, `users/${uid}`)
        const docs = await getDoc(collectionData);
        const data = docs.data();
        if (Object.keys(data).length) {
            let device = Object.keys(data)[0];
            if (!!!data[device].Expediente) {
                device = Object.keys(data)[1];
            }
            const images = JSON.parse(data[device].config.mapa)
            Object.keys(images).forEach((item) => {
                dispatch(setImages({ image: images[item][0] }))
            })
            dispatch(setExpediente({ data: data[device], device: device }));
        }
    }
}
/* export const startUploadImage = (file, uid) => {
    return async (dispatch) => {
        const storageRef = ref(FirebaseStorage, `Tagtical/${uid}/${file.name}`);
        uploadBytes(storageRef, file).then(() => {
            dispatch(startShowExpediente({ uid }))
        });
    }
}

export const startDeleteImage = (file, uid) => {
    return async (dispatch) => {
        deleteObject(file).then(() => {
            dispatch(startShowExpediente({ uid }))
        });
        Swal.fire(
            'Eliminado',
            'Se elimino la imagen',
            'success'
        )
    }
} */
export const startPostExpediente = (uid, device, dataForm) => {
    return async (dispatch) => {
        let datas = {};
        if (import.meta.env.VITE_REACT_APPLICATIONID == 2) {
            datas[device] = { Expediente: dataForm, userName: dataForm.nombre };
        } else {
            datas[device] = { Expediente: dataForm, petName: dataForm.nombre, phoneNumber: dataForm.numero };
        }
        const docRef = doc(FirebaseDB, `users/${uid}`);
        await setDoc(docRef, datas, { merge: true });
        Swal.fire(
            'Completado',
            'Se actualizaron los datos de la pagina correctamente',
            'success'
        )
    }
}