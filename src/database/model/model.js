import mongoose from 'mongoose';

const tarea = new mongoose.Schema ({
    nombre: { type: String, require: true },
    estado: { type: Boolean, require: false, default: false },
    importante: { type: Boolean, require: false, default: false },
    midia: { type: Boolean, require: false, default: false },
    fecha: { type: Date, require: false, default: new Date() },
    fechaVencimiento: { type: Date, require: false },
    nota: { type: String, require: false, default: "" },
    pasos: [{
        paso: { type: String, require: false},
        estado: { type: Boolean, require: false },
    }]
})

export default mongoose.model('Tarea', tarea);