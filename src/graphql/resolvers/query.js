import { Tarea, Lista } from '../../database/model/model.js';

const Query = {
    pendiente: async () => {
        return await Tarea.find({estado: false});
    },
    completada: async () => {
        return await Tarea.find({estado: true});
    },
    importante: async () => {
        return await Tarea.find({importante: true});
    },
    midia: async () => {
        return await Tarea.find({midia: true});
    },
    listas: async () => {
        return await Lista.find();
    }
}


export default Query;