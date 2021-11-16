import { GET_PRESSURES, GET_PRESSURE, CLEAR_PRESSURE_SELECTED } from "../types";

const PressureReducer = (state, action) =>{
    const {payload, type} = action;
    switch (type) {
        case GET_PRESSURES:
            return{
                ...state,
                pressures:payload.pressures,
                total:payload.total
            }
        case GET_PRESSURE:
            return{
                ...state,
                selectedPressure:payload
            }
        case CLEAR_PRESSURE_SELECTED:
                return{
                    ...state,
                    selectedPressure:null
                }
        default:
            return state;
    }
}

export default PressureReducer