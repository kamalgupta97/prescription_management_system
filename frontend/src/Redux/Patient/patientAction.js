import axios from 'axios';
import {
GET_PATIENT_REQUEST,
GET_PATIENT_SUCCESS,
GET_PATIENT_FAILURE,
} from './patientActiontypes';


const getpatientRequest=()=>{
    return{
        type:GET_PATIENT_REQUEST
    }
}
const getpatientSuccess=(payload)=>{
    return{
        type:GET_PATIENT_SUCCESS,
        payload
    }
}
const getpatientFailure=(payload)=>{
    return{
        type:GET_PATIENT_FAILURE,
        payload
    }
}


export const getPatientData=()=>(dispatch)=>{
    dispatch(getpatientRequest())
    return axios.get("http://localhost:7777/patient").then(res=>{
        dispatch(getpatientSuccess(res.data))
    })
    .catch(err=>{
        dispatch(getpatientFailure(err))
    })
}