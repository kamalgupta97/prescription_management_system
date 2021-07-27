import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getIndividualPrescription } from "../Redux/Patient/patientAction";

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    marginBottom: 12
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14,
    paddingBottom: 5
  },
  titling: {
    fontSize: 14,
    paddingBottom: 100
  },
  pos: {
    marginBottom: 12
  }
});

export default function IndividualPrescription({_id,name,gender,age}) {
    let { id } = useParams();
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const history = useHistory()
  const handleClick=(id)=>{
  
  }

  const dispatch = useDispatch()
  const state = useSelector(state => state)
  React.useEffect(()=>{
    dispatch(getIndividualPrescription(id))
  },[])


  return (
    <Card className={classes.root}>
       {
           console.log(state?.patient?.prescription && state?.patient?.prescription[0].patient_id  )
       }
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Name  :  {state?.patient?.prescription && state?.patient?.prescription[0].patient_id .name}
        </Typography>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Age  :  {state?.patient?.prescription && state?.patient?.prescription[0].patient_id .age}
        </Typography>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Gender  : {state?.patient?.prescription && state?.patient?.prescription[0].patient_id .gender}
        </Typography>

        <Typography
          className={classes.titling}
          color="textSecondary"
          gutterBottom
        >
          Number of Medicines : {state?.patient?.prescription?.length}
        </Typography>
        <h1>List Of Prescriptions</h1>
        {
            // console.log(state)
        state?.patient?.prescription?.map(item=>  <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >{item.medcine_id.name }  {item.quantity}</Typography>)
        }
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>handleClick(_id)}>View More</Button>
      </CardActions>
    </Card>
  );
}
