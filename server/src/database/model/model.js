import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const listaSchema = new Schema ({
    nombre: String,
    tareas: [{
        type: Schema.Types.ObjectId,
        ref: "Tarea"
    }],
});

const tareaSchema = new Schema ({
    nombre: String,
    estado: { type: Boolean, default: false },
    importante: { type: Boolean, default: false },
    midia: { type: Boolean, default: false },
    fecha: { type: Date, default: new Date()},
    fechaVencimiento: Date,
    nota: { type: String, default: "" },
    pasos: [{
        paso: { type: String, require: false },
        estado: { type: Boolean, require: false }
    }],
    lista: { type: Schema.Types.ObjectId, ref: "Lista" }
});

export const Tarea = mongoose.model('Tarea', tareaSchema);
export const Lista = mongoose.model('Lista', listaSchema);

export default { Tarea, Lista };