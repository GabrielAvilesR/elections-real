import { Router } from 'express'
import { liveStream } from './controller'

const router = new Router()


//ruta para websocket
router.get('/live', liveStream)


export default router