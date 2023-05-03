import express from 'express'
import { RegisterController } from '../controllers/Register.controller'
import handleErrorAsync from '../services/handleErrorAsync'
export const registerRouter = express.Router()

registerRouter.post('/', handleErrorAsync(RegisterController.create))