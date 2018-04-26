import { Router } from 'express'
import { liveStream , politicianJson} from './controller'

const router = new Router()


//ruta para websocket
router.get('/live', liveStream)

router.get('/politicianJson/:username', politicianJson )


export default router