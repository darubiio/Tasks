import { Tarea, Lista } from '../../database/model/model.js';

const Mutation = {

    // MUTACIONES SOBRE LISTA

    crearLista: async (_, {nombre}) => {
        const newList = new Lista({nombre})
        return await newList.save();
    },

    actualizaNombreLista: async (_, {_id, nombre}) => {
        return await Lista.findByIdAndUpdate(_id, {nombre}, {new: true});
    },

    eliminarLista: async (_, {_id}) => {
        return await Lista.findByIdAndDelete(_id);
    },
    
    // MUTACIONES SOBRE LA TAREA

    // Crea una nueva tarea sin lista asociada
    crearTarea: async (_, {nombre}) => {
        const newTarea = new Tarea({nombre});
        return await newTarea.save();
    },
    // Crea una tarea dentro de una nueva lista
    crearTareaEnLista: async (_, {_idL, nombre}) => {
        const newTarea = new Tarea({nombre});
        await newTarea.save();
        return await Lista.findByIdAndUpdate(_idL, { $push: { "tareas": newTarea._id } }, {new: true});
    },

    cambiarTareaDeLista: async (_, {idL, idNewL, idT}) => {
        const pull = await Lista.findByIdAndUpdate(idL, { $pull: { tareas: idT}});
        pull.save();
        return await Lista.findByIdAndUpdate(idNewL, { $push: { tareas: idT}});
    },

    actualizaNombreTarea: async (_, {_id, nombre}) => {
        return Tarea.findByIdAndUpdate(_id, {nombre}, {new: true});
    },

    eliminarTarea: async (_, {_id}) => {
        await Tarea.findByIdAndDelete(_id);
    },
    
    actualizarEstado: async (_, {_id, estado, importante, midia}) => {
        return await Tarea.findByIdAndUpdate(_id, {estado, importante, midia}, {new: true});
    },
    
    actualizarNota: async (_, {_id, nota}) => {
        return Tarea.findByIdAndUpdate(_id, {nota}, {new: true});
    },

    actualizarFechaVencimiento: async (_id, fechaVencimiento) => {
        return Tarea.findByIdAndUpdate(_id, {fechaVencimiento}, {new: true});
    },
    
    // MUTACIONES SOBRE PASOS DE LA TAREA

    agregarPaso: async (_, {_id, paso, estado}) => {
        return await Tarea.findByIdAndUpdate(_id, { $push: { "pasos": { paso, estado }}}, { new: true });
    },

    eliminarPaso: async (_, {_idT, _idP}) => {
        return await Tarea.findByIdAndUpdate(_idT, { $pull: {"pasos": { "_id": _idP}}});
    },

    actualizarNombrePaso: async (_, {_idT, _idP, nombre}) => {
        return await Tarea.findOneAndUpdate({_id:_idT, "pasos._id":_idP}, { $set: {"pasos.$.paso": nombre}});
    },

    actualizarEstadoPaso: async (_, {_idT, _idP, estado}) => {        
        return await Tarea.findOneAndUpdate({_id:_idT, "pasos._id":_idP}, { $set: {"pasos.$.estado": estado}});
    }
}
export default Mutation;