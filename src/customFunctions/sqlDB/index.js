import pool from 'mysql'

const query = "SELECT"

const pool = mysql.createPool({
	host: "arturogp.com",
	user: "electionsconnect",
	password: "1029384756",
	database: "mexelections18"
});


export const getLiveMessage = () => {
    return new Promise((resolve, reject) => {
        let message = {}
        
    })
}



/*pool.getConnection(function (err, connection) {
            var jsonResponse = {};
            var query = "SELECT name FROM student WHERE group_id = ? AND active = 1";
            connection.query(query, [groupId], function (err, result, fields) {
                if (err) throw err;
                // ... do some work
                res.send(jsonUser);
                // don't forget to release connection back to pool
                connection.release();
            })
        });*/