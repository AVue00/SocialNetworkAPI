import { Router } from 'express';
import { getAllUsers, getUserById, createUser, updateUser, deleteUser } from '../../controllers/userController.js';

const router = Router();

router.route('/').get(getAllUsers).post(createUser);
router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);
// router.route('/:_id/friends/:friendId').post().delete();

export default router;
