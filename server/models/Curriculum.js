const mongoose = require('mongoose')

const curriculumSchema = mongoose.Schema({
    name: {
        type: String,
        required: true 
    },
    goal: {
       type: String, 
    },
    description: {
        type: String,
    },
    sections: [{
        name: {
            type: String
        },
        resources: [String],
        projects: [String]
    }]
},
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Curriculum', curriculumSchema)