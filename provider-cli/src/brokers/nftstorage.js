const { NFTStorage, Blob } = require('nft.storage')

const pinFileToNFTStorage = (jwt, buffer, filename, debug = false) => {
    return new Promise(async response => {
        try {

            const client = new NFTStorage({ token: jwt })
            const blob = new Blob([buffer])
            const uploaded = await client.storeBlob(blob)
            if (debug) {
                console.log("Uploaded file is:", uploaded)
            }
            response(uploaded)
        } catch (e) {
            if (debug) {
                console.log(e)
            }
            response(false)
        }
    })
}

module.exports = { pinFileToNFTStorage }