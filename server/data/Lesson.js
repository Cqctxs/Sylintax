const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lessonSchema = new Schema({
    lesson: {
        type: [{}],
        required: true
    }
});

module.exports = mongoose.model('Lesson', lessonSchema);