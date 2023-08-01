import * as api from '../../APIS/index.js';
import { CREATEUSERS, DELETEUSERS, END_LOADING, FETCHUSERS, FETCHSINGLEUSERS, START_LOADING, UPDATEUSERS } from '../Constants/Actiontypes.js';

export const getAllUSERS = () => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING })
        const { data } = await api.fetchUserOrders();
        dispatch({ type: FETCHUSERS, payload: data })
        dispatch({ type: END_LOADING })
    } catch (error) {
        dispatch({ type: END_LOADING })
        console.log(error.message)
    }
}

export const getSINGLEUSER = (id) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING })
        const { data } = await api.fetchSingleUserOrder(id);

        dispatch({ type: FETCHSINGLEUSERS, payload: data })
        dispatch({ type: END_LOADING })
    } catch (error) {
        console.log(error.message)
    }
}

export const createUSER = (values, setLoading, setSuccess, setFailure, clearUSERS) => async (dispatch) => {
    try {
        setSuccess(false)
        setFailure(false)
        const { data } = await api.createUserOrder(values);
        dispatch({ type: CREATEUSERS, payload: data });
        setLoading(false);
        clearUSERS()
        setSuccess(true)

    } catch (error) {
        setLoading(false);
        setSuccess(false)
        setFailure(true)
        console.log(error)
    }
}

export const updateUSER = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updateUserOrder(id, post);
        dispatch({ type: UPDATEUSERS, payload: data });
    } catch (error) {
        console.log(error);
        // alert('Ohpps, unable to create new post due to an error.')
    }
}

export const deleteUSER = (id) => async (dispatch) => {
    try {
        await api.deleteUserOrder(id);
        dispatch({ type: DELETEUSERS, payload: id });
        // alert("Post deleted successfully. Refresh your browser to view")
    } catch (error) {
        // alert("0hpps, Unable to delete Post")
        console.log(error)
    }
}