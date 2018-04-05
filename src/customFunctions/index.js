export const wildCardCors = (res, req, next) => {
    res.header("Access-Control-Allow-Credentials", "true")
    //res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
}