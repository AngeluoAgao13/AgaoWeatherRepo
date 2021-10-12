const request = require ('request')

const forecast = (longitude, latitude, callback) => {
   const url = 'http://api.weatherstack.com/current?access_key=175197c5e885f6b5dd9f22cb919749d6&query=' + latitude + ',' + longitude  + '&units=f'

    request ({ url: url, json: true }, (error, response) => {

        if (error) {
            callback('Unable to connect to the internet', undefined)
        }else if (response.body.error) {
            callback('Unable to find location', undefined)
        }else {
            callback(undefined,response.body.current.weather_descriptions [0]+ '. It is currently ' + response.body.current.temperature + ' degrees out. It feels like ' + response.body.current.feelslike + ' degrees out.')
        }
    })
}

module.exports = forecast