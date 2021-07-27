import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SimpleCard from '../../Components/PatientCard'
import { getPatientData, getPatientDataByname, getPatientDatafilterbygender, getPatientDatasortbyage } from '../../Redux/Patient/patientAction';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button, Paper } from '@material-ui/core';
import Searched from '../../Components/Searched';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  paper:{
      width:300,
      padding:theme.spacing(2)
  },
  main:{
    width:"50%",
    margin:"auto"
  }
}));

export const Home = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
   const patient = useSelector(state => state.patient.patients)
   const searchedPatient = useSelector(state => state.patient.searchedPatient)
   const [page,setPage] = React.useState(1)
   const [query,setQuery] = React.useState("")
   const [sortby,setSortby] =React.useState("")
   const [filterby,setFilterby]=React.useState("")
    React.useEffect(()=>{
        console.log(page)
        dispatch(getPatientData(page,3))
       
    },[page])
    const handleSearch=()=>{
        alert(query)
        dispatch(getPatientDataByname(query))
    }
    const handleSortbyage=(e)=>{
        // setSortby(e.target.value==="Ascending"?1:-1)
        dispatch(getPatientDatasortbyage(e.target.value==="Ascending"?1:-1))
        
    }
    const handleFIlterbygender=(e)=>{
        // setFilterby()
        dispatch(getPatientDatafilterbygender(e.target.value))
    }
    return (
        <div className={classes.main} >
         <a href="http://localhost:7777/google">  
         <Button variant="contained" color="primary">
        Login
      </Button>
      </a>
          <div>
          <select name="" id="" onChange={handleSortbyage}>
                <option value="">Sort By Age</option>
                <option value="Ascending">Ascending</option>
                <option value="Descending">Descending</option>
            </select>
            <select name="" id=""  onChange={handleFIlterbygender}>
                <option value="">Filter By Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
          </div>
            {
               ` ${sortby} ${filterby}`
            }

            {
                console.log(searchedPatient,"AAAAAAAAAAAAAAAAAAAAA")
            }
              <form className={classes.root} noValidate autoComplete="off">
                <TextField id="standard-basic" label="Search"  onChange={(e)=>setQuery(e.target.value)}/>
                <div>{query}</div>
                <Button variant="contained" color="primary" onClick={handleSearch}>
        Search
      </Button>
   
            </form>
            <div>
            {
                searchedPatient?.patients && <Searched _id={searchedPatient.patients._id} name={searchedPatient.patients.name} age={searchedPatient.patients.age} gender={searchedPatient.patients.gender}/>
            }
            </div>
          
           {console.log(patient?.patients)}
        
            {patient?.patients.map(item=>
            
            <SimpleCard key={item._id} {...item}/>
            )
            
            
            }

           
         
         <Paper className={classes.paper}>
         <h4>Total Page : {patient?.page}</h4>
            <h4>Current Page : {page}</h4>
         </Paper>
     
            

            <Button variant="contained" color="primary" onClick={()=>setPage(page-1)}>
        Prev
      </Button>
      <Button variant="contained" color="primary" onClick={()=>setPage(page+1)}>
        Next
      </Button>
  
        </div>
    )
}
