const {Schema, model}=require('mongoose')

const RobosSchema=Schema({
    Direccion: {
        type: String,
        unique:true,
        required:[true, 'La direccion es obligatoria']
    },
    Latitud:{
        type: Number,
        minlenght: [6.13, 'El valor debe estar entre 6.217 y 6.13'],
        maxlenght: [6.217, 'El valor debe estar entre 6.217 y 6.13'],
        required: [true, 'La latitud es obligatoria']
    },
    Longitud: {
        type: Number,
        minlenght: [-75.34, 'La longitud debe estar entre -75.34 y -75.567'],
        maxlenght: [-75.567,'la longitud debe estar entre -75.34 y -75.567'],
        required: [true,'La longitud debe estar entre -75.34 y -75.567']
    },
    Descripcion: {
        type: String,
        required: [true, 'La descripcion es obligatoria']
    },
    Fecha:{
        type:Date,
        default: new Date()
    }
})
module.exports=model('Robos', RobosSchema)