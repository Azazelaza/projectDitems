import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slices/authSlice'
import ModalSlice from './modal/ModalSlice'
import PageContentSlice from './pageSlice/pageContentSlice'
import productsSlice from './productsSlice/productsSlice'
import MembershipSlice from './membershipSlice/membershipSlice'
import ExpedienteSlice from './expediente/slice'

export const store = configureStore({
    reducer: {
        auth: authSlice,
        page: PageContentSlice,
        modal: ModalSlice,
        products: productsSlice,
        membership: MembershipSlice,
        expediente: ExpedienteSlice
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})