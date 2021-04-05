import { Button, Paper, TextField, Typography } from "@material-ui/core"
import React from "react"

export default function ComposeIngredients() {
  return (
    <Paper>
      <Typography variant="h5">Ingredients</Typography>
      <Typography variant="subtitle2">Name</Typography>
      <Typography variant="subtitle2">Amount</Typography>
      <TextField label="name" />
      <TextField label="amount" />
      <Button>x</Button>
      <TextField label="name" />
      <TextField label="amount" />
      <Button>x</Button>
    </Paper>
  )
}
