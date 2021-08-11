import { gql } from 'apollo-server';

const typeDefs = gql`

type Query {
  tareas: [Tarea!]
  listas: [Lista!]
}

type Paso {
  _id: ID!
  paso: String
  estado: Boolean
}

type Tarea {
  _id: ID!
  nombre: String
  estado: Boolean
  importante: Boolean
  fecha: String
  fechaVencimiento: String
  midia: Boolean
  nota: String
  pasos: [Paso!]
  lista: Lista
}

type Lista {
  _id: ID!
  nombre: String!
  tareas: [Tarea!]
}

input PasosIn {
  _id: ID!
  paso: String!
  estado: Boolean!
}

input TareaIn {
  _id: ID!
  nombre: String!
  estado: Boolean!
  importante: Boolean!
  fecha: String!
  fechaVencimiento: String
  midia: Boolean!
  nota: String!
  pasos: [PasosIn!]
}

type Mutation {

  # LISTA  

  crearLista(
    nombre: String!
  ): Lista

  actualizaNombreLista(
    _id: ID!
    nombre: String!
  ): Lista

  eliminarLista(
    _id: ID!
  ): Lista

  # TAREA TAREA TAREA 

  crearTarea(
    _idL: ID!,
    nombre: String!
  ): Lista

  anadirALista(
    _idT: ID!,
    _idL: ID!
  ): Lista

  crearTareaEnLista(
    _idL: ID!,
    nombre: String!
  ): Tarea

  cambiarTareaDeLista(
    idL: ID!,
    idNewL: ID!,
    idT: ID!,
  ): Lista

  actualizaNombreTarea(
    _id: ID,
    nombre: String!
  ): Tarea

  eliminarTarea(
    _id: ID!,
  ): Tarea

  actualizarEstado( 
    _id: ID!,
    estado: Boolean!,
    importante: Boolean!,
    midia: Boolean!,
  ): Tarea  

  actualizarNota(
    _id: ID!,
    nota: String!
  ): Tarea

  actualizarFechaVencimiento(
    _id: ID!,
    fechaVencimiento: String!
  ): Tarea

  # PASO

  agregarPaso(
    _id: ID!,
    paso: String!, 
    estado: Boolean = false
  ): Tarea

  eliminarPaso(
    _idT: ID!, 
    _idP: ID!
  ): Paso

  actualizarNombrePaso(
    _idT: ID,
    _idP: ID,
    nombre: String
  ): Paso

  actualizarEstadoPaso(
    _idT: ID,
    _idP: ID,
    estado: Boolean
  ): Paso


# agragarNota(): Tarea
# agregarMiDia(): Tarea
# fechaVencimiento(): Tarea
    
}
`
export default typeDefs;