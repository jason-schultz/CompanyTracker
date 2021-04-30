import mongoose, { CallbackError } from 'mongoose'
import { Request, Response } from 'express'

var Company = mongoose.model('Company')

module companyController {
    export const findAll = (req: Request, res: Response) => {
        console.log('company.findAll')

        Company.find({}, (error: CallbackError, results: Document) => {
            return res.send(results)
        })
    }

    export const findById = (req: Request, res: Response) => {
        const id = req.params.id
        console.log(`Find company by id: ${id}`)

        Company.findById({'_id': id}, (error: CallbackError, results: Document) => {
            res.send(results)
        })
    }

    export const add = (req: Request, res: Response) => {
        const item = req.body
        Company.create(item, (error: CallbackError, results: Document) => {
            if(error) 
                return console.log(error)
            else
                return res.send(results)
        })
    }

    export const update = (req: Request, res: Response) => {
        const id = req.params.id
        const updates = req.body

        const doc = Company.findOneAndUpdate({ '_id': id }, updates, { new: false })
        if(doc)
            return res.status(200).send(doc)
        return res.status(500).send('Error updating item')
    }
}

export default companyController
