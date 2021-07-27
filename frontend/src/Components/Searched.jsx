import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";

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

export default function Searched({_id,name,gender,age}) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const history = useHistory()
  const handleClick=(id)=>{
    history.push(`/${id}`)
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Name  :  {name}
        </Typography>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Age  :  {age}
        </Typography>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Gender  : {gender}
        </Typography>

        <Typography
          className={classes.titling}
          color="textSecondary"
          gutterBottom
        >
          Number of Medicines
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>handleClick(_id)}>View More</Button>
      </CardActions>
    </Card>
  );
}
