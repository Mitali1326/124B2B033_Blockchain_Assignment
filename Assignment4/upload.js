const axios = require("axios");
const FormData = require("form-data");
const fs = require("fs");

const API_KEY = "93215f8ce3c5415025ca";
const API_SECRET = "b73f36cd2569954b80856a1ece2a0ac8c0f0e45074f019a039461b55f32e625f";

async function uploadFile() {
    const data = new FormData();
    data.append("file", fs.createReadStream("sample.txt"));

    try {
        const res = await axios.post(
            "https://api.pinata.cloud/pinning/pinFileToIPFS",
            data,
            {
                headers: {
                    ...data.getHeaders(),
                    pinata_api_key: API_KEY,
                    pinata_secret_api_key: API_SECRET,
                },
            }
        );

        console.log("File uploaded!");
        console.log("CID:", res.data.IpfsHash);
    } catch (err) {
        console.error(err);
    }
}

uploadFile();
