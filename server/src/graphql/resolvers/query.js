import { Tarea, Lista } from '../../database/model/model.js';

const Query = {
    tareasAll: async () => {
        return await Tarea.find().populate('lista');
    },
    listasAll: async () => {
        return await Lista.find().populate('tareas');
    },
}

export default Query;