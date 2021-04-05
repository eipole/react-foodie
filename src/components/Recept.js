import {
  Button,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Typography
} from "@material-ui/core"
import React, { useContext } from "react"
import { ReceptContext } from "../App"
import { handleDeleteRecept } from "./functions"

const useStyles = makeStyles((theme) => ({
  headingStyles: {
    display: "flex"
  },
  redButton: {
    color: theme.deleteColor
  }
  /*   rec_list: {
    whiteSpace: "pre_wrap"
  } */
}))

export default function Recept({ id, name, servings, cookTime, instructions }) {
  const { recept, setRecept } = useContext(ReceptContext)
  const classes = useStyles()
  return (
    <>
      <div className={classes.headingStyles}>
        <Typography variant="h4">{name} </Typography>
        <div>
          <Button color="primary">Edit</Button>
          <Button
            onClick={() => handleDeleteRecept(id, recept, setRecept)}
            className={classes.redButton}
          >
            Delete
          </Button>
        </div>
      </div>
      <div>
        <Typography variant="subtitle2">Cook time: {cookTime}</Typography>
      </div>
      <div>
        <Typography variant="subtitle2">Servings: {servings}</Typography>
      </div>
      <div>
        <Typography variant="subtitle2">Instructions: </Typography>
        <List component="ul">
          {instructions.map((elem, i) => {
            return (
              <ListItem key={i}>
                <ListItemText primary={elem} />
              </ListItem>
            )
          })}
        </List>
      </div>
    </>
  )
}
