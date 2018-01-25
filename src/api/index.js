import { Router } from 'express'
import tweets from './tweet'

const router = new Router()

router.get('/', (req, res) => {
    res.send("Hello and Welcome to *insert_name_of_app_here*")
})

router.use('/tweets', tweets)

export default router
