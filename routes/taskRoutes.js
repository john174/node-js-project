const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController'); 
const { authenticateToken } = require('../middlewares/authMiddleware');

router.use(authenticateToken);
router.get('/', taskController.getTasks);
router.post('/', taskController.createTask);
router.delete('/:taskId', taskController.deleteTask);
router.patch('/:taskId', taskController.updateTask);


module.exports = router;
