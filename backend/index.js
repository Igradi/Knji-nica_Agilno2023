const express = require('express')
const { default: mongoose } = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const registerRoute = require('./routes/RegisterRoute')
const loginRoute = require('./routes/LoginRoute')
const getUserByIdRoute = require('./routes/GetUserInfoRoute')
const getAllUsersRoute = require('./routes/GetAllUsersRoute')
const deleteUserByIdRoute = require('./routes/DeleteUserById')
const addBook = require('./routes/AddBook')
const getAllBooksRoute = require('./routes/GetAllBooksRoute')
const updateUserByIdRoute = require('./routes/UpdateUserById')

const app = express()

const PORT = 4000
const DB_URL =
  'mongodb+srv://admin:Ovojesifra@agilnoknjiznica.rcecdmi.mongodb.net/knjiznica'

//create server
app.listen(PORT, () => {
  console.log('server started')
})

//connect to db
mongoose
  .connect(DB_URL)
  .then(() => {
    console.log('db connected')
  })
  .catch((err) => {
    console.log(err.message)
  })

app.use(cors({ origin: ['http://localhost:3000'], credentials: true }))
app.use(cookieParser())
app.use(express.json())
app.use('/', registerRoute)
app.use('/', loginRoute)
app.use('/', getUserByIdRoute)
app.use('/', getAllUsersRoute)
app.use('/', deleteUserByIdRoute)
app.use('/', addBook)
app.use('/', updateUserByIdRoute)
app.use('/', updateUserByIdRoute)
app.use('/', getAllBooksRoute)
