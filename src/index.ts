import { v4 as uuidV4 } from 'uuid'

type Task = {
  id: string
  title: string;
  completed: boolean;
  createdAt: Date
}

// For not generic methods, the key 'as' can be used to define the type of the element
// Example: document.getElementById("new-task-form") as HTMLFormElement

// Wait, there is one more thing about this key. 
// It's possible to specify more than 1 element in a funtion with the 'as' key
// Example: document.getElementById("new-task-form") as HTMLFormElement | null
// As you can see, multiple possibilities can be defined with 'as', so it will be more easy to define conditions later.

const list = document.querySelector<HTMLUListElement>("#list")
const form = document.querySelector<HTMLFormElement>("#new-task-form")
const input = document.querySelector<HTMLInputElement>("#new-task-title")

form?.addEventListener("submit", c => {
  c.preventDefault()

  if (input?.value == "" || input?.value == null) return

  const task: Task = {
    id: uuidV4(), // or use something like shortid package for generate unique ids
    title: input.value,
    completed: false,
    createdAt: new Date()
  }

  addListItem(task);
})

function addListItem(task: Task) {
  const item = document.createElement('li')
  const label = document.createElement('label')
  const checkbox = document.createElement('input')
  checkbox.type = 'checkbox'
  label.append(checkbox, task.title)
  item.append(label)
  list?.append(item)
}

