import {
GET_PATIENT_REQUEST,
GET_PATIENT_SUCCESS,
GET_PATIENT_FAILURE,
} from './patientActiontypes';

const initState={
    patients:null,
    isLoading:false,
    isError:false,
}

export const patientReducer=(state=initState,{type,payload})=>{
    switch(type){
        case GET_PATIENT_REQUEST:{
            return {
              
                isLoading:true,

            }

        }
        case GET_PATIENT_SUCCESS:{
            return {
                ...state,
                patients:payload,
                isLoading:false
            }
        }
        case GET_PATIENT_FAILURE:{
            return {
                ...state,
                payload,
                isError:true,
                isLoading:false
            }
        }
        default:{
            return state
        }
    }
}