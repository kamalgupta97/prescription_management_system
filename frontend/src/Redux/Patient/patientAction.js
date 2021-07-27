import axios from 'axios';
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



const getprescriptionRequest=()=>{
    return{
        type:GET_PRESCRIPTION_REQUEST
    }
}
const getprescriptionSuccess=(payload)=>{
    return{
        type:GET_PRESCRIPTION_SUCCESS,
        payload
    }
}
const getprescriptionFailure=(payload)=>{
    return{
        type:GET_PRESCRIPTION_FAILURE,
        payload
    }
}


const getpatientbynameRequest=()=>{
    return{
        type:GET_PATIENT_BY_NAME_REQUEST
    }
}
const getpatientbynameSuccess=(payload)=>{
    return{
        type:GET_PATIENT_BY_NAME_SUCCESS,
        payload
    }
}
const getpatientbynameFailure=(payload)=>{
    return{
        type:GET_PATIENT_BY_NAME_FAILURE,
        payload
    }
}


export const getPatientData=(page,size)=>(dispatch)=>{
    dispatch(getpatientRequest())
    return axios.get(`http://localhost:7777/patient?page=${page}&size=${size}`).then(res=>{
        dispatch(getpatientSuccess(res.data))
    })
    .catch(err=>{
        dispatch(getpatientFailure(err))
    })
}

export const getPatientDatafilterbygender=(gender)=>(dispatch)=>{
    dispatch(getpatientRequest())
    return axios.get(`http://localhost:7777/patient/filterbygender?gender=${gender}`).then(res=>{
        dispatch(getpatientSuccess(res.data))
    })
    .catch(err=>{
        dispatch(getpatientFailure(err))
    })
}

export const getPatientDatasortbyage=(age)=>(dispatch)=>{
    dispatch(getpatientRequest())
    return axios.get(`http://localhost:7777/patient/sortbyage?age=${age}`).then(res=>{
        dispatch(getpatientSuccess(res.data))
    })
    .catch(err=>{
        dispatch(getpatientFailure(err))
    })
}


export const getIndividualPrescription=(payload)=>(dispatch)=>{
    dispatch(getprescriptionRequest())
    return axios.get(`http://localhost:7777/patientPrescription/${payload}`).then(res=>{
        dispatch(getprescriptionSuccess(res.data))
    })
    .catch(err=>{
        dispatch(getprescriptionFailure(err))
    })
}


export const getPatientDataByname = (payload)=>(dispatch)=>{
    dispatch(getpatientbynameRequest())
    return axios.get(`http://localhost:7777/patient/${payload}`).then(res=>{
        dispatch(getpatientbynameSuccess(res.data))
    })
    .catch(err=>{
        dispatch(getpatientbynameSuccess(err))
    })

}