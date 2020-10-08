// const mongoose = require('mongoose')
const Curriculum = require('../models/Curriculum')

const createError = require('http-errors')
    
module.exports.getAllCurricula = async(req, res, next) => {
    try {
        const allCurricula = await Curriculum.find()
        if (!allCurricula) throw createError.NotFound()
        
        res.send(allCurricula)
    } catch (error) {
        next(error)
    }
}

module.exports.getOneCurricula = async(req, res, next) => {
    try {
        console.log(req.params.id)
        const oneCurriculum = await Curriculum.findById( req.params.id )
        if (!oneCurriculum) throw createError.NotFound()
        
        res.send(oneCurriculum)
    } catch (error) {
        next(error)
    }
}

module.exports.createCurricula = async (req, res, next) => {
    try {
        const curriculum = new Curriculum(req.body)
        const savedCurriculum = await curriculum.save()
        if (!savedCurriculum) throw createError(500)
        
        res.send(savedCurriculum)
        
    } catch (error) {
        next(error)
    }
}

module.exports.editCurricula = async(req, res, next) => {
    try {
        const id = req.params.id
        const curriculumUpdate = req.body
        const options = { new: true }

        const updatedCurriculum = await Curriculum.findOneAndUpdate(
            { _id: req.params.id },
            { ...req.body },
            { new: true}
        )
        if (!updatedCurriculum) throw createError(500, 'Not updated')
        
        res.send(updatedCurriculum)

    } catch (error) {
        next(error)
    }
}

module.exports.deleteCurricula = async (req, res, next) => {
    try {
        const id = req.params.id
        const deletedCurriculum = await Curriculum.findByIdAndDelete(id)
        if (!deletedCurriculum) throw createError(500, 'Not Deleted')
        
        res.send(`Object with id: ${id} deleted`)
    } catch (error) {
        next(error)
    }
}