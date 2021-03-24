import express from 'express'

const routes = express.Router()

routes.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

routes.get('/', (req, res) => {
  res.send('Home page')
})

routes.get('/somepath', (req, res) => {
  res.send('Some path')
})

export default routes
