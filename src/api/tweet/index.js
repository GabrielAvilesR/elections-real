import { Router } from 'express'
import { showOne, showAll, liveStream } from './controller'

const router = new Router()

router.get('/', showAll)

//ruta para websocket
router.get('/live', liveStream)

router.get('/:id', showOne)


export default router