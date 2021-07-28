import { SET_UPDATE_MODE, UNSET_UPDATE_MODE } from "../reducers/updateReducer";

export const setUpdateMode = (payload) => ({type: SET_UPDATE_MODE, payload});
export const unsetUpdateMode = (payload) => ({type: UNSET_UPDATE_MODE, payload});