import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const tareaSchema = new Schema ({
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
    }]
});
export const Tarea = mongoose.model('Tarea', tareaSchema);


const listaSchema = new Schema ({
    nombre: { type: String, require: false, default: "Nueva Lista" },
    tareas: {type: Schema.ObjectId, ref: "Tarea"}
});

export const Lista = mongoose.model('Lista', listaSchema);
export default { Tarea, Lista };