import Swal from "sweetalert2";
import { startHiddenModal } from "../modal/thunk"
import { setCart, showCart } from "./slice";

export const startAddItemCart = ({ product_id, products }) => {
    return async (dispatch) => {
        dispatch(startHiddenModal());

        const cart = JSON.parse(localStorage.getItem('cart')) ?? [];
        const product = cart.find(item => item.id == product_id);
        const productAvalible = products.find(item => item.id == product_id);

        if (product) {
            if (product.quantity < productAvalible.quantity) {
                cart.forEach(item => {
                    if (item.id == productAvalible.id) {
                        item.quantity += 1
                    }
                })
            } else {
                Swal.fire(
                    'Maxima cantidad alcanzada',
                    'No puedes comprar mas de este producto',
                    'error'
                )
            }
        } else {
            cart.push({
                id: product_id,
                quantity: 1,
            })
        }

        dispatch(setCart(cart));
        dispatch(showCart(true));
    }
}
export const startMinusItemCart = ({ product_id }) => {
    return async (dispatch) => {
        const cart = JSON.parse(localStorage.getItem('cart')) ?? [];
        const product = cart.find(item => item.id == product_id);

        if (product.quantity == 1) {
            return dispatch(startClearItem(product.id))
        }
        if (product) {
            cart.forEach(item => {
                item.quantity -= 1
            })
        }
        dispatch(setCart(cart));
    }
}
export const startGetCart = (productsAvalible) => {
    return async (dispatch) => {
        const cart = JSON.parse(localStorage.getItem('cart')) ?? [];
        if (cart.length) {
            cart.forEach(product => {
                const avalible = productsAvalible.find(prd => prd.id == product.id);
                if (avalible.quantity == 0) {
                    cart.splice(productsAvalible.findIndex(prd => prd.id == product.id), 1)
                } else if (avalible) {
                    if (avalible.quantity <= product.quantity) {
                        product.quantity = avalible.quantity
                    }
                }

            })
            dispatch(setCart(cart));
        }
    }
}
export const startClearItem = (product_id) => {
    return async (dispatch) => {
        const cart = JSON.parse(localStorage.getItem('cart'));
        const index = cart.findIndex(item => item.id == product_id)
        cart.splice(index, 1);
        dispatch(setCart(cart))
    }
}
export const startHiddenCart = () => {
    return async (dispatch) => {
        dispatch(showCart(false))
    }
}
export const startVisibleCart = () => {
    return async (dispatch) => {
        dispatch(showCart(true))
    }
}