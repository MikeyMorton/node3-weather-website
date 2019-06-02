const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

const messageOne = document.querySelector('#message-one')
const forecast = document.querySelector("#forecast-summary")
const currentTemp = document.querySelector("#current-temp")
const precipProb = document.querySelector("#precip-prob")
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const location = search.value

    messageOne.textContent = 'Loading...'
    forecast.textContent = ''
    currentTemp.textContent = ''
    precipProb.textContent = ''

    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.location
                forecast.textContent = data.forecast.summary
                currentTemp.textContent = data.forecast.temp
                precipProb.textContent = data.forecast.precipProb
                // messageTwo.textContent = data.forecast
            }
        })
    })
})