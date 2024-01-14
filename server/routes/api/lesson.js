const express = require('express');
const router = express.Router();
const lessonController = require('../../controllers/api/lessonController');

router.post('/', lessonController.createNewLesson);
router.get('/', lessonController.getLessonById);

module.exports = router;