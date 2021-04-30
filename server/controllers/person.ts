import mongoose, { CallbackError } from 'mongoose'
import { Request, Response } from 'express'

var Person = mongoose.model('Person')

module personController {
    export const findByCompanyId = (req: Request, res: Response) => {
        const companyId = req.params.companyId
        console.log('person.findByCompanyId')

        Person.find({ 'companyId': companyId }, (error: CallbackError, results: Document) => {
            return res.send(results)
        })
    }

    export const findByPersonId = (req: Request, res: Response) => {
        const id = req.params.id
        console.log('person.findById')

        Person.findOne({ '_id': id }, (error: CallbackError, results: Document) => {
            return res.send(results)
        })
    }

    export const add = (req: Request, res: Response) => {
        const item = req.body
        console.log('person.add')
        
        Person.create(item, (error: CallbackError, results: Document) => {
            if(error)
                console.log(error)
            return res.status(200).send(results)
        })
    }

    export const update = (req: Request, res: Response) => {
        var id = req.params.id
        var updates = req.body

        const doc = Person.findOneAndUpdate({ '_id': id}, updates, { new: false })
        if(doc)
            return res.status(200).send(doc)
        return res.status(500).send(`Error updating item ${updates}`)
    }

    export const remove = (req: Request, res: Response) => {
        const id = req.params.id
        Person.remove({"_id": id}, (error: CallbackError) => {
            if(error)
                return res.status(500).send(`Error occured when attempting to remove ${typeof(Person)} with id ${id}`)
            return res.status(200).send(`Removed ${typeof(Person)} with id ${id}`)
        })
    }
}

export default personController
