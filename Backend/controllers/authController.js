import User from '../models/User.js'; // ✅ default import
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const generateToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, { expiresIn: '1d' });
};

// Named export
export async function loginUser(req, res) {
  const { username, password, isAdmin } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const valid = await user.validPassword(password);
    if (!valid) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const expectedRole = isAdmin ? 'admin' : 'user';
    if (user.role !== expectedRole) {
      return res.status(401).json({ message: 'Invalid credentials for this role' });
    }

    res.json({
      id: user._id,
      username: user.username,
      isAdmin: user.role === 'admin',
      token: generateToken(user._id, user.role),
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
}

// Named export
export async function registerUser(req, res) {
  const { username, password, role } = req.body;

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    const user = new User({ username, password, role: role || 'user' });
    await user.save();

    res.status(201).json({ message: 'User created successfully', userId: user._id });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
}
