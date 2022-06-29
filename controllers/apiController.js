const fetch = require('node-fetch');
const Image = require("../models/Image");
const key = '23798924-17f42c690434b5dec74a9c318';

exports.getFirst = function (request, response) {
    const q = request.query.q;
    fetch(`https://pixabay.com/api/?key=${key}&image_type=photo&q=${q}`)
        .then(res => res.json())
        .then(json => json.hits)
        .then(hits => hits.map(hit =>  new Image(
            hit.previewURL,
            hit.webformatURL,
            hit.webformatWidth,
            hit.webformatHeight)
            )
        )
        .then(imageArr => response.send(imageArr[0]))

}

exports.getArr = function (request, response) {
    const q = request.query.q;
    fetch(`https://pixabay.com/api/?key=${key}&image_type=photo&q=${q}`)
        .then(res => res.json())
        .then(json => json.hits)
        .then(hits => hits.map(hit =>  new Image(
                hit.previewURL,
                hit.webformatURL,
                hit.webformatWidth,
                hit.webformatHeight)
            )
        )
        .then(imageArr => response.send(imageArr))

}