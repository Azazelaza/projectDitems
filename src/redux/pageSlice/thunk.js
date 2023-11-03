import Swal from "sweetalert2";
import { Call } from "../../hooks/apiRequest";
import { setDataPageContent } from "./pageContentSlice";

export const startGetDataPage = () => {
    return async (dispatch) => {

        const page = await Call(
            'page',
            'GET',
        )

        if (page.success) {
            dispatch(setDataPageContent(page.data.data));
            return true
        }
        Swal.fire(
            'No se cargo la información',
            'Ocurrio un error con la pagina porfavor recarga',
            'error'
        )
    }
} 