import { LOGIN } from "./action";
const initialState = { user: null };

export const loginReducer = (store = initialState, { type, payload }) => {
    switch (type) {
        case LOGIN:
            console.log(payload.status)
            localStorage.setItem("userLoginDetails", JSON.stringify(payload))
            return {
                ...store, user: payload.user
            }
        default:
            return store;
    }
}