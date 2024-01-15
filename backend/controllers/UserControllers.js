const UserBookModel = require('../models/UserBookModel')
const UserModel = require('../models/UserModel')
const BookModel = require("../models/BookModel");
const jwt = require('jsonwebtoken')

const PRIVATE_KEY = 'AGILNO'

const createToken = (id) => {
  return jwt.sign({ id }, PRIVATE_KEY, {
    expiresIn: '24h',
  })
}

const handleErrors = (err) => {
  let errors = { msg: '' }

  if (err.message === 'incorrect email') {
    errors.msg = 'That email is not registered'
  }

  if (err.message === 'incorrect password') {
    errors.msg = 'That password is incorrect'
  }

  if (err.code === 11000) {
    errors.msg = 'Email is already registered'
  }
  return errors
}

const register = async (req, res, next) => {
  try {
    const { email, password, name, lastName } = req.body
    const user = await UserModel.create({ email, password, name, lastName })
    const token = createToken(user._id)
    res.cookie('jwt', token, {
      httpOnly: false,
      maxAge: 86400000,
    })
    res.status(201).json({ user: user._id, created: true })
  } catch (err) {
    console.log(err)
    const errors = handleErrors(err)
    res.json({ errors })
  }
}

const login = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await UserModel.findOne({ email })
    if (user) {
      const isPasswordMatch = await user.matchPassword(password)
      if (isPasswordMatch) {
        const token = createToken(user._id)

        res.status(200).json({
          user: user._id,
          role: user.role,
          authenticated: true,
          token: token,
        })
      } else {
        throw Error('incorrect password')
      }
    } else {
      throw Error('incorrect email')
    }
  } catch (err) {
    console.log('catch')
    console.error(err)
    const errors = handleErrors(err)
    res.json({ errors })
  }
}

const getUserById = async (req, res) => {
  try {
    const userId = req.params.id

    const user = await UserModel.findById(userId)

    if (!user) {
      throw new Error('User not found')
    }

    res.status(200).json({
      name: user.name,
      lastName: user.lastName,
      email: user.email,
    })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: err.message })
  }
}

const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find({}, { password: 0 })
    res.status(200).json(users)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: err.message })
  }
}

const deleteUserById = async (req, res) => {
  try {
    const userId = req.params.id
    const user = await UserModel.findByIdAndDelete(userId)
    if (!user) {
      throw new Error('User not found')
    }
    res.status(200).json({ message: 'User deleted successfully' })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: err.message })
  }
}

const updateUserById = async (req, res) => {
  try {
    const userId = req.params.id
    const updatedData = req.body

    const user = await UserModel.findById(userId)

    if (!user) {
      throw new Error('User not found')
    }

    const updatedUser = await UserModel.findByIdAndUpdate(userId, updatedData, {
      new: true,
    })

    res.status(200).json(updatedUser)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: err.message })
  }
}

const addBookAndUser = async (req, res) => {
  try {
    const { idUser, idBook } = req.body

    const bookUser = await UserBookModel.create({
      idUser,
      idBook,
    })
    res.status(200).json({
      idUser: idUser,
      idBook: idBook,
    })
  } catch (error) {
    res.status(500).json({ message: err.message })
  }
}

const getUserBooks = async (req, res) => {
  try {
    const userId = req.params.userId;

    const userBooks = await UserBookModel.find({ idUser: userId });

    const uniqueBooks = [...new Set(userBooks.map(item => item.idBook))];

    const booksDetails = await BookModel.find({ _id: { $in: uniqueBooks } });

    res.status(200).json(booksDetails);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = {
  register,
  login,
  getUserById,
  getAllUsers,
  deleteUserById,
  updateUserById,
  addBookAndUser,
  getUserBooks,
}
