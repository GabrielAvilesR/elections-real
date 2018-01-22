import { getAll, getOne } from '../../customFunctions/fileDB'

export const showAll = (req, res, next) => 
    getAll()
    .then((tweets) => {
        res.status(200).json(tweets)
    })
    .catch(next)

export const showOne = ({params}, res, next) => 
    getOne(params.id)
    .then((tweet) => {
        res.status(200).json(tweet)
    })
    .catch((err) => {
        if(err.message === "not found"){
            res.status(404).send('Element doesnt exists')
        }else{
            next(err)
        }
    })

