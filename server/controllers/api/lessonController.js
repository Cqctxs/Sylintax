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

module.exports = { createNewLesson };