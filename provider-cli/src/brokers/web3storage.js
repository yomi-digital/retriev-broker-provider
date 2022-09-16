const { Web3Storage, File } = require('web3.storage')

const pinFileToWeb3Storage = (jwt, buffer, filename, debug = false) => {
    return new Promise(async response => {
        try {
            let files = [new File([buffer], filename)]
            const client = new Web3Storage({ token: jwt })
            const uploaded = await client.put(files, { wrapWithDirectory: false })
            if (debug) {
                console.log("Uploaded file is:", uploaded)
            }
            response(uploaded)
        } catch (e) {
            if (debug) {
                console.log(e.message)
            }
            response(false)
        }
    })
}

module.exports = { pinFileToWeb3Storage }