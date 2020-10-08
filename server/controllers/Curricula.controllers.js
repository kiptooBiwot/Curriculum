const createError = require('http-errors')
    
module.exports.getAllCurricula = (req, res, next) => {
    res.send('All curricula from Controller')
}

module.exports.getOneCurricula = (req, res, next) => {
    res.send('Single Curricula of id: ' + req.params.id)
}

module.exports.createCurricula = (req, res, next) => {
    res.send('Curricula Saved!')
}

module.exports.editCurricula = (req, res, next) => {
    res.send('Curricula Edited! ' + req.params.id)
}

module.exports.deleteCurricula = (req, res, next) => {
    res.send('Curricula Deleted!' + req.params.id)
}