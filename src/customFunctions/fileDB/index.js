import jsonfile from 'jsonfile'

export const getAll = () => {
    return new Promise((resolve, reject) => {
        jsonfile.readFile('./src/files/tweets.json', (err, obj) => {
            if(err) reject(err)
            resolve(obj)
        })
    })
}

export const getOne = (id) => {
    return new Promise ((resolve, reject) => {
        jsonfile.readFile('./src/files/tweets.json', (err, obj) => {
            if(err) reject(err)
            const existsOne = Object.keys(obj).some((index) => {
                return obj[index].id_str === id
            })
            if(!existsOne) reject(new Error('not found'))
            Object.keys(obj).map((index) => {
                if(obj[index]["id_str"] === id){
                    resolve(obj[index])
                }
            })
        })
    })  
}


export const getLiveMessage = () => {
    let message = {}
    message.politicians = []
    message.parties = []
    //variable nomas para el testing
    let d = new Date()
    return new Promise ((resolve, reject) => {
        jsonfile.readFile('./src/files/politicians.json', (err, obj) => {
            if(err) return reject(err)
            for(let i = 0; i < obj.length; i++){
                obj[i].positive_tweets += d.getMilliseconds()
                obj[i].negative_tweets += (d.getMilliseconds())/2
                message.politicians.push(obj[i])
            }
            jsonfile.writeFile('./src/files/politicians.json', obj, (err) => {
                if(err) return reject(err)
            })
            jsonfile.readFile('./src/files/parties.json', (err, obj) => {
                if(err) return reject(err)
                for(let i = 0; i < obj.length; i++){
                    obj[i].positive_tweets += d.getMilliseconds()
                    obj[i].negative_tweets += (d.getMilliseconds())/2
                    message.parties.push(obj[i])
                }
                 message = JSON.stringify(message)
                 return resolve(message)
                 jsonfile.writeFile('./src/files/parties.json', obj, (err) => {
                if(err) return reject(err)
            })
            })
        })
    }) 
}