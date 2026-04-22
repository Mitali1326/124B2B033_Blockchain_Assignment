**Assignment 4: IPFS Integration**

**Objective**

The objective of this assignment is to implement decentralized file storage using IPFS by uploading and retrieving files through a Node.js application.

**Description**

This project demonstrates how files can be stored on the IPFS network using the Pinata pinning service and later accessed using a unique Content Identifier (CID).

**IPFS Service Used**
Pinata (IPFS pinning service)
IPFS Gateway for file retrieval

 **Libraries Used**
axios → for making HTTP requests
form-data → for handling file uploads
fs (File System) → for reading local files

**Project Structure**
assignment-4/
│── upload.js
│── retrieve.js
│── sample.txt
│── README.md
│── screenshot/
│── package.json

**How Files Are Stored**
The file is read using Node.js fs module
The file is sent to Pinata API using axios
Pinata uploads the file to IPFS
A unique CID (Content Identifier) is generated

**How Files Are Retrieved**
The generated CID is used
The file is accessed via IPFS gateway
File content is fetched from decentralized network

**IPFS Gateway Used**
https://gateway.pinata.cloud/ipfs/<CID>


** IPFS Hash Example**
QmExampleCID123456789
