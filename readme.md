# What is @kbco/pcpartpicker?
This is mean to be a super dynamic library for querying against the undocumented API that PC Part Picker has.

Right now only the following part types are supported: `cpu`, `cpu cooler`, `motherboard`, `memory`, `storage`, `video card`, `power supply`, and `case`.

To add support for more part types, all that will need to be done is updating the `constants.js` file to have the [proper mappings](#proper-mappings), and the actual api url.

## So how do I use it?
```
yarn add pc-part-picker
```
or
```
npm add --save pc-part-picker
```
then somewhere in you script

Using async/await
```js
const partPicker = require('@kbco/pcpartpicker');

let queryPartPicker = async (type) => await partPicker.query(partPicker.constants.urls[type], partPicker.constants[type])
  
let searchPartPicker = async (type, query) => await partPicker.search(type, query)

console.log(searchPartPicker('cpu', 'Ryzen'))
```
Using promises

```js
const partPicker = require('@kbco/pcpartpicker');

function queryPartPicker (type) { 
    return partPicker.query(partPicker.constants.urls[type], partPicker.constants[type])
}

function searchPartPicker(type, query) {
    return partPicker.search(type, query)
}

searchPartPicker('cpu', 'Ryzen')
    .then(function (parts) {
        console.log(parts)
    })
```

# Proper Mappings
So this is a little bit tricky. I'll do my best to explain.

### Finding the API endpoint.
 - Open the developer tools for your browser.
 - Go to the page you want to add support for. 
 - Go to the network tab.
 - Look for the request that looks like `?mode=list&xslug=&search=`
 - Copy that full URL and paste it into your local constants file.
 - Go back to the page and we're going to want to count the number of columns that it has, starting at `0` (zero)
   - Note that for each column, we may want to normalize the fields (like for the video card's page the column of index `1` is called "Video Card", we call it "name" since it's the name of the part).
 - Once you have the indices and the column names, you're going to want to put them in the `constants.js` file, associated with the proper key (You'll have to creat a new one...).
 
 
