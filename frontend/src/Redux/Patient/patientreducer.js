import {
GET_PATIENT_REQUEST,
GET_PATIENT_SUCCESS,
GET_PATIENT_FAILURE,
GET_PRESCRIPTION_REQUEST,
GET_PRESCRIPTION_SUCCESS,
GET_PRESCRIPTION_FAILURE,
GET_PATIENT_BY_NAME_REQUEST,
GET_PATIENT_BY_NAME_SUCCESS,
GET_PATIENT_BY_NAME_FAILURE,
} from './patientActiontypes';

const initState={
    patients:null,
    isLoading:false,
    isError:false,
    prescription:null,
    searchedPatient:null
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
        case GET_PRESCRIPTION_REQUEST:{
            return {
                isLoading:true
            }
        }
        case GET_PRESCRIPTION_SUCCESS:{
            return{
                ...state,
                prescription:payload,
                isLoading:false,

            }
        }
        case GET_PRESCRIPTION_FAILURE:{
            return {
                ...state,
                payload,
                isError:true,
                isLoading:false,

            }
        }



        case GET_PATIENT_BY_NAME_REQUEST:{
            return {
                isLoading:true
            }
        }
        case GET_PATIENT_BY_NAME_SUCCESS:{
            return{
                ...state,
                searchedPatient:payload,
                isLoading:false,

            }
        }
        case GET_PATIENT_BY_NAME_FAILURE:{
            return {
                ...state,
                payload,
                isError:true,
                isLoading:false,

            }
        }

        default:{
            return state
        }
    }
}