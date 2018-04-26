import Tweet from './tweetModel'


export const getLiveMessage = () => {
    return new Promise((resolve, reject) => {
        Tweet.find()
            .then((tweets) => {
                resolve(tweets)
            })
            .catch(console.log)
    })
}

export const getPoliticianJson = (username) => {
    return new Promise((resolve, reject) => {
        Tweet.findOne({politicianUsername:username})
            .then((tweet) =>{
                resolve(tweet.json)
            })
            .catch(console.log)
    })
}

