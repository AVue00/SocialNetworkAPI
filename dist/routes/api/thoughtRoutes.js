import { Router } from 'express';
import { getAllThoughts, getThoughtById, createThought, updateThought, deleteThought, addReaction, deleteReaction } from '../../controllers/thoughtController.js';
const router = Router();
router.route('/').get(getAllThoughts).post(createThought);
router.route('/:id').get(getThoughtById).put(updateThought).delete(deleteThought);
router.route('/:id/reactions').post(addReaction);
router.route('/:id/reactions/:reactionId').delete(deleteReaction);
export default router;
