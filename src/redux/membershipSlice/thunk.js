import Swal from "sweetalert2"
import { setMembership } from "./membershipSlice";
import { Call } from "../../hooks/apiRequest";

export const startGetMembership = () => {
    return async (dispatch) => {
        const page = await Call(
            'membership/company',
            'GET',
        )

        if (page.success) {
            dispatch(setMembership(page.data));
            return true
        }

        Swal.fire(
            'Error',
            'No se pudieron cargar las membresias porfavor recarga la pagina',
            'error'
        )
    }
}
