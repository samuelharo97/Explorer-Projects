import { Router } from 'express';
import { User } from '../controller/user.controller';

const router = Router();

const user = new User();

router.post('/register', user.create);
router.delete('/user/:id', user.delete);

export default router;
