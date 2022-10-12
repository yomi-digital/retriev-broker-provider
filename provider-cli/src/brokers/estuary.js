const FormData = require('form-data')
const axios = require('axios')
const fs = require('fs')

const pinFileToEstuary = (jwt, buffer, filename, debug = false) => {
    return new Promise(response => {
        var data = new FormData();
        data.append('data', buffer, filename);
        var config = {
            method: 'post',
            url: 'https://upload.estuary.tech/content/add',
            headers: {
                'Authorization': 'Bearer ' + jwt,
                ...data.getHeaders()
            },
            data: data
        };

        axios(config)
            .then(function (res) {
                if (debug) {
                    console.log("ESTUARY_RESPONSE", JSON.stringify(res.data));
                }
                response(res.data.cid)
            })
            .catch(function (e) {
                if (debug) {
                    console.log(error);
                }
                response(false)
            });
    })
}

module.exports = { pinFileToEstuary }