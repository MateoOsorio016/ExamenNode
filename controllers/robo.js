const {response} =require('express')
const Robos =require('../models/robo')

const getRobos=async(req, res=response) => {
    let mensaje=''
    try {
        const robos= await Robos.find()
        mensaje= robos
    } catch (error) {
        mensaje= error
        
    }
    res.json({
       robos: mensaje
    })
}
const postRobos=async(req, res=response)=>{
    const body= req.body
    let mensaje=''
    const robo=new Robos(body)
    console.log(body)
    try {
        await robo.save()
        mensaje='Robo registrado'
    } catch (error) {
        mensaje=error
        
    }
    res.json({
        mensaje
    })
}
const putRobos=async(req, res=response)=>{
    const body= req.body

    let mensaje=''
    try {
    await Robos.findOneAndUpdate({_id:body._id}, {Direccion: body.Direccion, Latitud: body.Latitud, Longitud: body.Longitud, Descripcion: body.Descripcion})
        mensaje='Robo Actualizado'

    } catch (error) {
        mensaje='Error'
        
    }
    res.json({
        mensaje
    })
}
const deleteRobos=async(req, res=response)=>{
    const body= req.body;

    let mensaje=''
    try {
        await Robos.findOneAndDelete({_id:body._id}, {Direccion: body.Direccion, Latitud: body.Latitud, Longitud: body.Longitud, Descripcion: body.Descripcion})
        mensaje='Robo Borrado'

    } catch (error) {
        mensaje='Error'
        
    }
    res.json({
        mensaje
    })
}
module.exports={
    getRobos,
    postRobos,
    putRobos,
    deleteRobos

}