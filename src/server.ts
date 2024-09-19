import jsonServer from 'json-server'
import registerController from './controllers/registerController'

const databasePath = 'db.json'

const server = jsonServer.create()
const router = jsonServer.router(databasePath)

server.use(jsonServer.defaults({
    bodyParser: true
}))

server.post('/register', registerController)

server.use(router)

server.listen(3000, () => {
    console.log('Server running!')
})