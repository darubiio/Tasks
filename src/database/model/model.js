import mongoose from 'mongoose';

const tarea = new mongoose.Schema ({
    nombre: { type: String, require: true },
    estado: { type: Boolean, require: false, default: false },
    importante: { type: Boolean, require: false, default: false },
    midia: { type: Boolean, require: false, default: false },
    fecha: { type: Date, require: false, default: new Date()},
    fechaVencimiento: { type: Date, require: false },
    nota: { type: String, require: false, default: "" },
    pasos: [{
        paso: { type: String, require: false },
        estado: { type: Boolean, require: false }
    }],
    listaName: { type: String , default: "Sin lista"}
});
export const Tarea = mongoose.model('Tarea', tarea);

const lista = new mongoose.Schema ({
    nombre: { type: String, require: false, default: "Nueva Lista" },
    tareas: [ tarea ]
});
export const Lista = mongoose.model('Lista', lista);

export default { Tarea, Lista };