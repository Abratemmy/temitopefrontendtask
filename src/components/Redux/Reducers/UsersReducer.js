
import { CREATEUSERS, DELETEUSERS, END_LOADING, FETCHUSERS, FETCHSINGLEUSERS, START_LOADING, UPDATEUSERS } from "../Constants/Actiontypes"
const initialState = { items: [], isLoading: true }

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true }
        case END_LOADING:
            return { ...state, isLoading: false }
        case FETCHUSERS:
            return { ...state, allUsers: action.payload };
        case FETCHSINGLEUSERS:
            return { ...state, singleUser: action.payload }
        case CREATEUSERS:
            return {
                ...state,
                items: [...state?.items || [], action.payload]
            };
        case UPDATEUSERS:
            return {
                items: state.items.map((item) =>
                    item.id === action.payload._id
                        ? { ...item, ...action.payload }
                        : item
                )
            };
        case DELETEUSERS:
            return {
                items: state.items.filter((item) =>
                    item._id !== action.payload
                )
            };
        default:
            return state;
    }
}