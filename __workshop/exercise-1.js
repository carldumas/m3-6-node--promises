// Exercise 1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const rp = require('request-promise');


// Returns the current position of the ISS
function getIssPosition() {
    return rp('http://api.open-notify.org/iss-snow.json')
        .then((resultString) => {
            return JSON.parse(resultString);
        })
        .then((resultObject) => {
            return {
                lat: resultObject.iss_position.latitude,
                lng: resultObject.iss_position.longitude,
            };
        })
        .catch(function (err) {
            return ('Error: ',  err)
        });
}

getIssPosition().then((res) => console.log(res));
