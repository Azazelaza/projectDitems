import { setProduct, setProducts } from "./productsSlice"
import { Call } from "../../hooks/apiRequest";

export const startGetProducts = () => {
    return async (dispatch) => {
        const page = await Call(
            'products/company',
            'GET',
        )

        if (page.success) {
            dispatch(setProducts(page.data));
            return true
        }
    }
}

export const startSetProductView = ({ data }) => {
    return async (dispatch) => {
        dispatch(setProduct(data));
    }
}