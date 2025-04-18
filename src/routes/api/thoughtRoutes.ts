import { Router } from 'express';

const router = Router();

router.route('/').get().post();
router.route('/:_id').get().put().delete();
router.route('/:_id/reactions').post().delete();

export default router;
