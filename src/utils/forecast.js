const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/c52a63755a2cbb87f885b089142bf14c/' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            console.log(body.currently.summary)
            const data = {
                summary: body.currently.summary,
                temp: 'It is currently ' + body.currently.temperature.toFixed(0) + '° F',
                precipProb: 'There is a ' + (body.currently.precipProbability * 100) + '% chance of rain.'
            }
            callback(undefined, data)
        }
    })
}

module.exports = forecast