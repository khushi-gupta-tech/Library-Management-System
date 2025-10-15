// routes/authRoutes.js
import express from 'express';
import { loginUser, registerUser } from '../controllers/authController.js';

const router = express.Router();

// Define routes
router.post('/login', loginUser);
router.post('/register', registerUser);

// ✅ Default export
export default router;
