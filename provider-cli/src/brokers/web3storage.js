const { Web3Storage, File } = require('web3.storage')

const pinFileToWeb3Storage = (jwt, content, version, debug = false) => {
    return new Promise(async response => {
        try {
            const buffer = Buffer.from(content)
            let files = [
                new File([buffer], version)
            ]
            const client = new Web3Storage({ token: jwt })
            const uploaded = await client.put(files, { wrapWithDirectory: false })
            if (debug) {
                console.log(uploaded)
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