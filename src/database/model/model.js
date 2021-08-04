import mongoose from 'mongoose';

const tarea = new mongoose.Schema ({
    nombre: { type: String, require: true },
    estado: { type: Boolean, require: true },
    importante: { type: Boolean, require: false },
    midia: { type: Boolean, require: false },
    fecha: { type: Date, require: false },
    nota: { type: String, require: false },
    pasos: [{
        paso: { type: String, require: false},
        estado: { type: Boolean, require: false },
    }]
})

export default mongoose.model('Tarea', tarea);