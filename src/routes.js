const express = require('express')
const multer = require('multer')

const uploadConfig = require('./config/upload')
const PostController = require('./controllers/PostController')
const LikeController = require('./controllers/LikeController')

const routes = new express.Router()
const upload = multer(uploadConfig)

routes.get('/favicon.ico', (req, res) => {
  res.status(204).json({ nope: true })
})

routes.get('/', (req, res) => {
  return res.status(200).json({ message: 'Hi! Enjoy the Silence.' })
})

routes.get('/posts', PostController.index)
routes.post('/posts', upload.single('image'), PostController.store)
routes.post('/posts/:id/like', LikeController.store)

module.exports = routes
