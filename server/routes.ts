import { Router } from 'express'
import companyRoutes from './routes/companyRoutes'
import personRoutes from './routes/personRoutes'

const routes = Router()

routes.use('/', companyRoutes)
routes.use('/', personRoutes)

export default routes