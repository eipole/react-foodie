import { Button, Container, Grid } from "@material-ui/core"
import React, { createContext, useState } from "react"
import ReceptCompose from "./components/ReceptCompose"
import ReceptList from "./components/ReceptList"
import { handleAddRecept } from "./components/functions"

export const ReceptContext = createContext()

function App() {
  const [recept, setRecept] = useState(sample)

  return (
    <ReceptContext.Provider value={{ recept, setRecept }}>
      <Container>
        <Grid container spacing={3}>
          <Grid xs={6} item>
            <ReceptList recept={recept} />
            <Button color="primary" onClick={() => handleAddRecept(setRecept)}>
              Add recept
            </Button>
          </Grid>
          <Grid xs={6} item>
            <ReceptCompose />
          </Grid>
        </Grid>
      </Container>
    </ReceptContext.Provider>
  )
}

const sample = [
  {
    id: 1,
    name: "Fried rice",
    servings: 3,
    cookTime: "1:45",
    instructions: ["frie chiken", "add salt", "eat this"],
    ingredients: [
      {
        id: 1,
        name: "chicken",
        amount: "mere en nok"
      },
      {
        id: 2,
        name: "salt",
        amount: "en neve"
      }
    ]
  },
  {
    id: 2,
    name: "Good food",
    servings: 5,
    cookTime: "3:20",
    instructions: ["cook pork", "add peppers", "nam nam"],
    ingredients: [
      {
        id: 1,
        name: "pork",
        amount: "2 kg"
      },
      {
        id: 2,
        name: "pepper",
        amount: "masse"
      }
    ]
  }
]

export default App
