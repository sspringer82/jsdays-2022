import { Router } from 'express';
import { getAllUsers, getOneUser } from './controller.js';

const router = Router();

router.get('/', getAllUsers);
router.get('/:id', getOneUser);

export { router };