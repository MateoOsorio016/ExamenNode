const {Router}=require('express')

const route= Router()

const {getRobos,postRobos,putRobos, deleteRobos}=require('../controllers/robo')

route.get('/',getRobos)

route.put('/',putRobos)

route.post('/',postRobos)

route.delete('/',deleteRobos)

module.exports=route