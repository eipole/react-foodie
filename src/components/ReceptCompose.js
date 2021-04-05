import {
  Card,
  Container,
  makeStyles,
  Paper,
  TextareaAutosize,
  TextField,
  Typography
} from "@material-ui/core"
import React from "react"
import ComposeIngredients from "./ComposeIngredients"
const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2)
  },
  instructions: {
    paddingTop: theme.spacing(2)
  },
  Typography: {
    paddingTop: theme.spacing(6)
  }
}))

export default function ReceptCompose() {
  const classes = useStyles()
  return (
    <Card className={classes.container}>
      <Typography variant="h5">Name</Typography>
      <TextField label="name"></TextField>
      <Typography variant="h5">Cook time</Typography>
      <TextField label="name"></TextField>
      <Typography variant="h5">Servings</Typography>
      <TextField label="name"></TextField>
      <Typography className={classes.instructions} variant="h5">
        Instructions:
      </Typography>
      <div>
        <TextareaAutosize rowsMin={5} placeholder="mingi jutt" />
      </div>
      <ComposeIngredients />
    </Card>
  )
}
