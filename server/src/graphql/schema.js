import { gql } from 'apollo-server';

const typeDefs = gql`

type Query {
  tareasAll: [Task!]
  listasAll: [List!]
}

type Step {
  _id: ID!
  step: String
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

# input PasosIn {
#   _id: ID!
#   paso: String!
#   estado: Boolean!
# }

# input TareaIn {
#   _id: ID!
#   nombre: String!
#   estado: Boolean!
#   importante: Boolean!
#   fecha: String!
#   fechaVencimiento: String
#   midia: Boolean!
#   nota: String!
#   pasos: [PasosIn!]
# }

type Mutation {

  # LISTA  

  crearLista(
    nombre: String!
  ): List

  actualizaNombreLista(
    _id: ID!
    nombre: String!
  ): List

  eliminarLista(
    _id: ID!
  ): List

  # TAREA TAREA TAREA 

  crearTarea(
    nombre: String!
  ): Task

  anadirALista(
    _idT: ID!,
    _idL: ID!
  ): List

  crearTareaEnLista(
    _idL: ID!,
    nombre: String!
  ): Task

  cambiarTareaDeLista(
    idL: ID!,
    idNewL: ID!,
    idT: ID!,
  ): List

  actualizaNombreTarea(
    _id: ID,
    nombre: String!
  ): Task

  eliminarTarea(
    _id: ID!,
  ): Task

  actualizarEstado( 
    _id: ID!,
    estado: Boolean!,
    importante: Boolean!,
    midia: Boolean!,
  ): Task  

  actualizarNota(
    _id: ID!,
    nota: String!
  ): Task

  actualizarFechaVencimiento(
    _id: ID!,
    fechaVencimiento: String!
  ): Task

  # PASO

  agregarPaso(
    _id: ID!,
    paso: String!, 
    estado: Boolean = false
  ): Task

  eliminarPaso(
    _idT: ID!, 
    _idP: ID!
  ): Step

  actualizarNombrePaso(
    _idT: ID,
    _idP: ID,
    nombre: String
  ): Step

  actualizarEstadoPaso(
    _idT: ID,
    _idP: ID,
    estado: Boolean
  ): Step


# agragarNota(): Tarea
# agregarMiDia(): Tarea
# fechaVencimiento(): Tarea
    
}
`
export default typeDefs;