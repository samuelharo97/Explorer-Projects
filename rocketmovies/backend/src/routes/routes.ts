import { Router } from 'express';
import { User } from '../controller/user.controller';
import { Movie } from '../controller/movie.controller';

const router = Router();

const user = new User();
const movie = new Movie();

router.post('/register', user.create);
router.post('/login', user.login);
router.get('/user', user.findAll);
router.get('/user/:id', user.findOne);
router.delete('/user/:id', user.destroy);
router.post('/movie/:id', movie.create);
router.delete('/movie/:id', movie.destroy);

export default router;
