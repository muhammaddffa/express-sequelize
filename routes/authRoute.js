import express from 'express';
import { registerUser, signInUser } from '../controllers/authController.js';

const router = express.Router();


// Registration route
router.post('/register', registerUser);

// Signin route 
router.post('/login', signInUser);

export default router;