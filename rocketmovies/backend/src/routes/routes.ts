import { Router } from 'express';
import { User } from '../controller/user.controller';

const router = Router();

const createUser = new User();

router.post('/user', createUser.create);

export default router;
