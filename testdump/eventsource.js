const source = new EventSource("http://localhost:9000/tweets/live")
source.onmessage = function(event) {
    let data = event.data
    let dataJson = JSON.parse(data)
    console.log(dataJson)
    let content = document.getElementById("content")
    content.innerHTML = ""
    content.innerHTML += "<h1>Politicians</h1>"
    for(let i = 0; i < dataJson.politicians.length ; i++){
        let stringHTML = `<h2>${dataJson.politicians[i].politician_name}</h2>` +
                         `<h3>${dataJson.politicians[i].username}</h3>` +
                         `<p><strong>Positive tweets: </strong>${dataJson.politicians[i].politician_pts}</p>` +
                         `<p><strong>Positive tweets: </strong>${dataJson.politicians[i].politician_nts}</p></br>`
        content.innerHTML += stringHTML
    }
    content.innerHTML += "<h1>Parties</h1>"
    for(let i = 0; i < dataJson.parties.length ; i++){
        let stringHTML = `<h2>${dataJson.parties[i].party_name}</h2>` +
                         `<p><strong>Positive tweets: </strong>${dataJson.parties[i].party_pts}</p>` +
                         `<p><strong>Positive tweets: </strong>${dataJson.parties[i].party_nts}</p></br>`
        content.innerHTML += stringHTML
    }
}