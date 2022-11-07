import { Router } from "express";
import  { getUsers, creatUser, deleteUser } from './controllers/UserController.js'


const routes = Router()

routes.get('/users', getUsers)
routes.post('/users', creatUser)
routes.delete('/users/:id', deleteUser)

export default routes