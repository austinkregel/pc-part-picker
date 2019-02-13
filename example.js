const partPicker = require('part-picker');

let queryPartPicker = async (type) => partPicker.query(partPicker.constants.urls[type], partPicker.constants[type])
    .then(parts => {
        console.log(parts)
    })

let searchPartPicker = async (type, query) => partPicker.search(type, query)
    .then(parts => {
        console.log(parts)
    })

searchPartPicker('cpu', 'Ryzen')