import { Router } from 'express'
import { showOne, showAll } from './controller'

const router = new Router()

router.get('/', showAll)

router.get('/:id', showOne)


export default router