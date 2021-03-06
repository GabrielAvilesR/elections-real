import { getLiveMessage, getPoliticianJson } from '../../customFunctions/sqlDB'

//variable global de conecciones
let openConnections = []
export const liveStream = (req, res, next) => {
    req.socket.setTimeout(Number.MAX_SAFE_INTEGER)
    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Access-Control-Allow-Origin':'*'
    });
    res.write('\n');
    openConnections.push(res);
 
    
    req.on("close", function() {
        openConnections.splice(openConnections.indexOf(res),1);
        console.log("on out no connections",openConnections.length);
    });
};
 

setInterval(() => {
    openConnections.forEach(function(resp) {
        let d = new Date();
        getLiveMessage()
            .then((message) => {
                 resp.write('event: message\n');
                 resp.write('id: ' + d.getTime() + '\n');
                 resp.write('data:' + message +   '\n\n'); // Note the extra newline
            })
            .catch((err) =>  {
                console.log(err)
            })
    });
}, 1000);

export const politicianJson = ({params}, res, next) => 
    getPoliticianJson(params.username).
        then((message) => {
            message[0].politician_json = JSON.parse(message[0].politician_json)
            res.status(200).json(message[0])
        })
        .catch(next)


export const showAll = (req, res, next) => 
        getLiveMessage()
            .then((message) => {
                message = JSON.parse(message)
                res.status(200).json(message)
            })
            .catch(next)
