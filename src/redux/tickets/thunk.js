import Swal from "sweetalert2"
import { startHiddenModal } from "../modal/thunk";
import { CallWithOutCompany } from "../../hooks/apiRequest";

export const startPostTicket = (data) => {
    return async (dispatch) => {

        const page = await CallWithOutCompany(
            'ticket',
            'POST',
            {
                ...data,
                company_id: import.meta.env.VITE_REACT_APPLICATIONID
            }
        )
        if (page.success) {
            Swal.fire(
                'Ticket enviado',
                'Se envio el ticket correctamente en breve nos contactaremos contigo',
                'success'
            )
        }else{
            Swal.fire(
                'No se envio el ticket',
                'Estamos teniendo dificultades intenta mas tarde',
                'error'
            )
        }

        dispatch(startHiddenModal());
    }
}