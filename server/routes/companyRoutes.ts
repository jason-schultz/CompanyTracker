import Router from 'express'
import companyController from '../controllers/company'

const companyRouter = Router()

companyRouter.get('/companies', companyController.findAll)
companyRouter.get('/companies/:id', companyController.findById)
companyRouter.post('/companies', companyController.add)
companyRouter.post('/companies/:id', companyController.update)

export default companyRouter