# 124B2B033_Blockchain_Assignment
**Blockchain Lab Assignments**

👤 Student Details
Name: Mitali Chaudhari
PRN:124B2B033
Course Name: Blockchain Technology Lab

📌 Overview

This repository contains all five Blockchain Lab assignments, covering essential concepts of Web3 development such as smart contracts, decentralized applications (DApps), blockchain deployment, IPFS storage, and DAO governance.

The assignments are designed to provide both theoretical understanding and practical implementation of blockchain technologies.

Assignment Descriptions
🔹 Assignment 1: Smart Contract Development

Developed a basic smart contract using Solidity to store and retrieve a single integer value on the blockchain.
This demonstrates core concepts like state variables and functions.

🔹 Assignment 2: Smart Contract Deployment

Deployed the smart contract on a blockchain test network (such as Sepolia / Polygon Amoy) to understand real-world deployment.
Focuses on gas fees, transactions, and network interaction.

🔹 Assignment 3: Web Interface + MetaMask

Built a simple frontend DApp using HTML, CSS, and JavaScript.
Integrated MetaMask and ethers.js to interact with the deployed smart contract directly from the browser.

🔹 Assignment 4: IPFS Integration

Implemented decentralized file storage using IPFS (Pinata).
Users can upload files and retrieve them using a CID (Content Identifier).

🔹 Assignment 5: DAO Smart Contract

Created a basic Decentralized Autonomous Organization (DAO) smart contract.
Users can:

Create proposals
Vote on proposals
Execute decisions based on voting results

Tech Stack Used
Solidity
Remix IDE
MetaMask
Ethers.js
HTML, CSS, JavaScript
Sepolia Testnet
Polygon Amoy Testnet
IPFS (Pinata)


How to Run Each Assignment
▶️ Assignment 1 & 2 (Smart Contracts)
Open Remix IDE: https://remix.ethereum.org
Open the .sol file
Compile the contract
Go to Deploy & Run Transactions
Select Injected Provider (MetaMask)
Connect your MetaMask wallet
Select network:
Sepolia (Assignment 1)
Polygon Amoy (Assignment 2)
Click Deploy and confirm transaction

▶️ Assignment 3 (Web DApp)
Open terminal in the assignment-3 folder

Run:

python -m http.server 3000
Open browser: http://127.0.0.1:3000
Connect MetaMask
Interact with the smart contract

▶️ Assignment 4 (IPFS File Storage)
Open index.html (or use Live Server)
Upload a file
Copy the generated CID
Use CID to retrieve the file

▶️ Assignment 5 (DAO Smart Contract)
Open Remix IDE
Compile dao.sol
Deploy using MetaMask
Interact with functions:
createProposal()
vote()
executeProposal()
View results using getProposals()

Always keep test ETH/MATIC for transactions
Never use real funds while testing
