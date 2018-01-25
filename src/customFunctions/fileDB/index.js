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