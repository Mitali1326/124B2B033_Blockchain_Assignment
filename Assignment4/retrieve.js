const fetch = require("node-fetch");

const CID = "QmX8ne4qzbyWkjCaMXukzLBZXx654ELJ1Xhu7uMpACyKy1";

async function getFile() {
    try {
        const url = `https://ipfs.io/ipfs/${CID}`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.text();

        console.log("File content:");
        console.log(data);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

getFile();