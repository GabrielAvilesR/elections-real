import mysql from 'mysql'

const party_query = "SELECT party_name, party_pts, party_nts " +
                    "FROM Party"
const politician_query = "SELECT politician_name, username, politician_pts, politician_nts, politician_na " +
                            "FROM Politician"
const party_politician_query = "SELECT politician_name, party_name " +
                                "FROM Politician, Party, Party_politician"
                                
const politician_json_query = (username) => `SELECT politician_json ` +
                                            `FROM Politician ` +
                                            `WHERE username = '${username}'`


const pool = mysql.createPool({
	host: "arturogp.com",
	user: "electionsconnect",
	password: "ele20181029384756",
	database: "mexelections18",
    multipleStatements:true
})


export const getLiveMessage = () => {
    return new Promise((resolve, reject) => {
        let message = {}
        pool.getConnection((err, con) => {
            if(err) return reject(err)
            con.query(party_query + '; ' + politician_query + '; ' + party_politician_query, (err, results, fields) => {
                if(err) return reject(err)
                let message = {}
                message.politicians = []
                message.parties = []
                for(let i = 0; i < results[0].length; i++){
                    message.parties.push(results[0][i])
                }
                for(let i = 0; i < results[1].length; i++){
                    results[1][i].relParties = []
                    message.politicians.push(results[1][i])
                }
                for(let i = 0; i < results[2].length;i++){
                    for(let j = 0; j < message.politicians.length; j++){
                        if(message.politicians[j].politician_name === results[2][i].politician_name){
                            if(!message.politicians[j].relParties.includes(results[2][i].party_name)){
                                message.politicians[j].relParties.push(results[2][i].party_name)
                            }
                        }
                    }
                }
                message = JSON.stringify(message)
                return resolve(message)
                con.release()
            })
        })
    })
}

export const getPoliticianJson = (username) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, con) => {
            if(err) return reject(err)
            con.query(politician_json_query(username), (err, result, fields) => {
                if(err) return reject(err)
                return resolve(result)
                con.release()
            })
        })
    })
}

