import { gql } from 'apollo-server';

const typeDefs = gql`

type Query {
  currentUser: User!
  tasks: [Task!]
  task(_id: ID): Task!
  lists: [List!]
  list(_id: ID): List!
  tasksImportants: [Task!]
  tasksCompleted: [Task!]
  tasksMyDay: [Task!]
}

type User {
  _id: ID!
  username: String!
}

type Step {
  _id: ID!
  name: String
  state: Boolean
}

type Task {
  _id: ID!
  name: String
  date: String
  dueDate: String
  state: Boolean
  myDay: Boolean
  important: Boolean
  note: String
  steps: [Step!]
  list: List
  by: User!
}

type List {
  _id: ID!
  name: String!
  tasks: [Task!]
}

type Mutation {

  # List Mutations

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

  # Tasks mutations

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
  ): Task
  
  updateTaskStateImportant( 
    _id: ID!,
    important: Boolean!,
  ): Task
  
  updateTaskStateMyDay(
    _id: ID!,
    myDay: Boolean!
  ): Task

  updateNote(
    _id: ID!,
    note: String!
  ): Task

  updateDueDate(
    _id: ID!,
    dueDate: String!
  ): Task

  # Steps Mutations

  addStep(
    _idT: ID!,
    name: String!,
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

    # User Mutations

  register(
    username: String!,
    password: String!
  ): User!

  login(
    username: String!,
    password: String!
  ): loginResponse!
}

  type loginResponse {
    token: String
    user: User
  }

`
export default typeDefs;