import Router from 'express'
import personController from '../controllers/person'

const personRouter = Router()

personRouter.get('/companies/:companyId/people', personController.findByCompanyId)
personRouter.get('/person/:id', personController.findByPersonId)
personRouter.post('/person', personController.add)
personRouter.put('/person/:id', personController.update)
personRouter.delete('/person/:id', personController.remove)

export default personRouter