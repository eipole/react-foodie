import {
  Button,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Typography
} from "@material-ui/core"
import React from "react"
const useStyles = makeStyles((theme) => ({
  headingStyles: {
    display: "flex"
  },
  redButton: {
    color: theme.deleteColor
  }
}))

export default function Recept({ name, servings, cookTime, instructions }) {
  const classes = useStyles()
  return (
    <>
      <div className={classes.headingStyles}>
        <Typography variant="h4">{name} </Typography>
        <div>
          <Button color="primary">Edit</Button>
          <Button className={classes.redButton}>Delete</Button>
        </div>
      </div>
      <div>
        <Typography variant="subtitle2">Cook time: {cookTime}</Typography>
      </div>
      <div>
        <Typography variant="subtitle3">Servings: {servings}</Typography>
      </div>
      <div>
        <Typography variant="subtitle3">Instructions: </Typography>
        <List component="ul">
          {instructions.map((elem, i) => {
            return (
              <ListItem>
                <ListItemText primary={elem} />
              </ListItem>
            )
          })}
        </List>
      </div>
    </>
  )
}
