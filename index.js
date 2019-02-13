const axios = require('axios');
const jsdom = require("jsdom");

const { JSDOM } = jsdom;
const constants = require('./constants');
const { FIELD_STARS, FIELD_REVIEWS } = constants;

const query = async (url, partMapping, page = 1) => {
    const apiUrl = url + '&page=' + page++;

    console.log(apiUrl)
    const { data: response } = await axios.get(apiUrl);

    const { window } = new JSDOM('<table>' + response.result.html + '</table>', {
        url: "https://pcpartpicker.com/"
    });

    const {document} = window;

    let parts = [];

    document.querySelectorAll('tr').forEach(item => {
        let part = {
            stars: 0,
            reviews: 0
        };
        item.childNodes.forEach((column, i) => {
            let columnName = partMapping[i];

            if (!columnName) {
                return;
            }

            part[columnName] = column.textContent.trim() || null;

            if (columnName === FIELD_REVIEWS) {
                column.querySelectorAll('.stars > li').forEach(star => {
                    if (star.classList.contains('full-star')) {
                        part[FIELD_STARS]++
                    } else if (star.classList.contains('half-star')) {
                        part[FIELD_STARS] += .5
                    }
                });

                part[FIELD_REVIEWS] = parseInt(column.textContent.replace(' ', '')
                    .replace('(', '')
                    .replace(')', ''))
            }

        })
        parts.push(part)
    })

    return parts;
};

const search = async (typeToSearchFor, searchQuery, page = 1) => {
    let url = constants.urls[typeToSearchFor];
    return await query(
        url + '&search=' + searchQuery,
        constants[typeToSearchFor],
        page
    )
};

module.exports = {
    query,
    search,
    constants
}
