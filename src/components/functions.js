import { v4 as uuidv4 } from "uuid"

export function handleDeleteRecept(id, store, set) {
  const filtered = store.filter((elem) => elem.id !== id)
  set((prev) => filtered)
}

export function handleAddRecept(set) {
  const newRecept = {
    id: uuidv4(),
    name: "new",
    servings: 1,
    cookTime: "1:00",
    instructions: ["frie chiken", "add salt", "eat this"],
    ingredients: [
      {
        id: uuidv4(),
        name: "name",
        amount: "amount"
      }
    ]
  }
  set((prev) => [...prev, newRecept])
}
