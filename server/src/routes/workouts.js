import { Router } from 'express';
import { WorkoutsController } from '../controllers';

const router = Router();

router.get('/', WorkoutsController.getAll);
router.get('/:id', WorkoutsController.get);
router.get('/search/params', WorkoutsController.search);

export default router;
