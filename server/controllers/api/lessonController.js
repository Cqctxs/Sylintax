const Lesson = require('../../data/Lesson');

const createNewLesson = async (req, res) => {
    const { lesson } = req.body;
    if (!lesson) return res.status(400).json({ 'message': 'Lesson data empty.' });
    try {
        const result = await Lesson.create({ 
            "lesson": lesson
        });
        console.log(result);
        res.status(201).json({ 'success': `New lesson created!` });
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}

const getLessonById = async (req, res) => {
    const id = req.params.id;
    if (!id) return res.status(400).json({ 'message': 'id is required' });
    try {
        const foundLesson = await Lesson.findOne({_id: id}).exec();
        if (!foundLesson) res.status(404);
        res.json(foundLesson.lesson);
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}

module.exports = { createNewLesson, getLessonById };