// asynchromous basics where not gonna need npm modules.

// console.log('Starting') // first will happen ( starting massage print)

// setTimeout(() => {  // last will happen kasi maantay pa 2nd para ma print(2 Second Timer massage print)
//     console.log('2 Second Timer')
// }, 2000 )  //2000 milisec equal to 2 seconds (dd nag baSi)

// setTimeout(() => {
//     console.log('0 Second Timer')
// }, 0)

// console.log('Stopping') //second will happen(stopping massage print)

// in asynchoronous thing will not happen after next .. diri man siya pasurunod habang
// nag aantay san pira na segundo para ma run an saru mahanap mo na siya san pwd i run ..
// ---------------------pinaka unana code as example----------------



const request = require ('request')
const geocode = require ('./utils/geocode')  // nasa local file siya san utils
const forecast = require ('./utils/forecast')
//  the url below is a weather stack
// const url = 'http://api.weatherstack.com/current?access_key=175197c5e885f6b5dd9f22cb919749d6&query=12.6650,%20123.8877 '

// request ({url: url, json: true }, (error, response)=> {
//     if (error) {
//         console.log('Unable To Connect To Weather Service')
    
//     } else if (response.body.error) {
//         console.log('Unable to Find Location')
//     }else {
//         console.log(response.body.current.weather_descriptions [0] + '. It is currently ' + response.body.current.temperature + ' degrees out. It feels like ' + response.body.current.feelslike + ' degrees out.')
//     }
// })

forecast(-75.7088, 44.1545, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
  })           

   



// --------pangduwa----
    // const data = JSON.parse(response.body)
    // console.log(data.current) //an sa video data.currently .. nag undefined sa ako an data.currently


// Goal: Print a small forecast to the user
// 1. print: "it is currently 58.55 degrees out. There is a 0% chance of rain."
// 2. test your work!

// -------this is for mapbox---------

// Geocoding
// Address -> lat/long -> weather

// Goal: Print the lat/long for los Angeles
// 1.fire off a new request to the URL explored in browser
// 2.have the request module parse it as JSON
// 3. Print both the latitude and longitude to the terminal
// 4. test your work!

//  Goal: Handle errors handler for low-level errors
// 1. Setup an error handler for low-level errors
// 2. Test by disabling network request and running the app
// 3. Setup error handling for no matching results
// 4. test by altering the serach  term and running the app

// ----pang tulo----------

// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

// dahil nakuha na an url sa una an gagamitun nmn is geocoding kun baga siya an variable


//  --------ini  sa geocode ------
// geocode ('iloveyou', (error, data) => {
//  console.log('Error', error)
//  console.log('Data', data)
// })
// ----geocode----------------