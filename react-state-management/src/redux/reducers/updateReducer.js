export const SET_UPDATE_MODE = "SET_UPDATE_MODE";
export const UNSET_UPDATE_MODE = "UNSET_UPDATE_MODE";


const initialState ={
  isActive: false,
  data:{}
}
const updateReducer = (state = initialState, action) => {
  switch(action.type){
    case SET_UPDATE_MODE: return {...state, isActive: true, data: action.payload};
    case UNSET_UPDATE_MODE: return {...state, isActive:false, data: {}};
    default: return state
  }
}
export default updateReducer;