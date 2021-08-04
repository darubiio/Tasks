import { gql } from 'apollo-server';

const typeDefs = gql`

type Query {
  pendiente: [Tarea!]
  completada: [Tarea!]
  importante: [Tarea!]
  midia: [Tarea!]
}

type Paso {
  _id: ID!
  paso: String
  estado: Boolean
}

type Tarea {
  _id: ID!
  nombre: String!
  estado: Boolean
  importante: Boolean
  fecha: String
  fechaVencimiento: String
  midia: Boolean
  nota: String
  pasos: [Paso!]
}

type Mutation {

  # TAREA

  crearTarea( 
    nombre: String!
  ): Tarea

actualizarEstado( 
  _id: ID!, 
  estado: Boolean!,
  importante: Boolean!,
  midia: Boolean!,
): Tarea

actualizaNombre(
  _id: ID,
  nombre: String!
): Tarea

eliminarTarea(
  _id: ID! 
): Tarea

actualizarNota(
  _id: ID!,
  nota: String!
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