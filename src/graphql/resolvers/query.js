import { Tarea, Lista } from '../../database/model/model.js';

const Query = {
    tareas: async () => {
        return await Tarea.find().populate('lista');
    },
    listas: async () => {
        return await Lista.find().populate('tareas');
    }
}

export default Query;