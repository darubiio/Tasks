import { gql } from 'apollo-server';

const typeDefs = gql`

type Query {
  tasks: [Task!]
  lists: [List!]
}

type Step {
  _id: ID!
  name: String
  state: Boolean
}

type Task {
  _id: ID!
  name: String
  state: Boolean
  important: Boolean
  date: String
  dueDate: String
  myDay: Boolean
  note: String
  steps: [Step!]
  list: List
}

type List {
  _id: ID!
  name: String!
  tasks: [Task!]
}

type Mutation {

  # LISTA  

  createList(
    name: String!
  ): List

  updateListName(
    _id: ID!
    name: String!
  ): List

  deleteList(
    _id: ID!
  ): List

  # TAREA TAREA TAREA 

  createTask(
    name: String!
  ): Task

  addToList(
    _idT: ID!,
    _idL: ID!
  ): List

  createTaskInList(
    _idL: ID!,
    name: String!
  ): Task

  changeListTask(
    idL: ID!,
    idNewL: ID!,
    idT: ID!,
  ): List

  updateTaskName(
    _id: ID,
    name: String!
  ): Task

  deleteTask(
    _id: ID!,
  ): Task

  updateTaskState( 
    _id: ID!,
    state: Boolean!,
    important: Boolean!,
    myDay: Boolean!,
  ): Task  

  updateNote(
    _id: ID!,
    note: String!
  ): Task

  updateDueDate(
    _id: ID!,
    dueDate: String!
  ): Task

  # PASO

  addStep(
    _id: ID!,
    name: String!, 
    state: Boolean = false
  ): Task

  deleteStep(
    _idT: ID!, 
    _idS: ID!
  ): Step

  updateStepName(
    _idT: ID,
    _idS: ID,
    name: String
  ): Step

  updateStepState(
    _idT: ID,
    _idS: ID,
    state: Boolean
  ): Step

# fechaVencimiento(): Tarea
}
`
export default typeDefs;