import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SimpleCard from '../../Components/PatientCard'
import { getPatientData } from '../../Redux/Patient/patientAction'

export const Home = () => {
    const dispatch = useDispatch()
   const patient = useSelector(state => state.patient.patients)
    React.useEffect(()=>{
        dispatch(getPatientData())
       
    },[])
    return (
        <div>
           {console.log(patient?.patients)}
        
            {patient?.patients.map(item=>
            
            <SimpleCard key={item._id} {...item}/>
            )
            
            
            }
            
        </div>
    )
}
