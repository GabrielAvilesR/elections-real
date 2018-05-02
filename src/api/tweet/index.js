import { Router } from 'express'
import { liveStream , politicianJson, showAll} from './controller'

const router = new Router()


//ruta para websocket
router.get('/', showAll)

router.get('/live', liveStream)

router.get('/politicianJson/:username', politicianJson )


export default router