import { Router } from 'express';
import { User } from '../controller/user.controller';
import { Movie } from '../controller/movie.controller';

const router = Router();

const user = new User();
const movie = new Movie();

router.post('/register', user.create);
router.get('/user', user.findAll);
router.delete('/user/:id', user.delete);
router.post('/movie/:id', movie.create);

export default router;
