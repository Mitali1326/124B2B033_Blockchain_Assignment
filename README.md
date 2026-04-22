**124B2B033_Blockchain_Assignment**

**Blockchain Technology Lab Assignments**

👤 **Student Details**

Name: Mitali Chaudhari

PRN: 124B2B033

Course: Blockchain Technology Lab

**📌 Overview**

This repository contains five Blockchain Lab assignments, covering key concepts of Web3 development, including:

Smart Contract Development
Blockchain Deployment
Decentralized Applications (DApps)
IPFS (Decentralized Storage)
DAO (Decentralized Governance)

Each assignment combines theoretical understanding + practical implementation using modern blockchain tools.

**📂 Repository Structure**

Assignment-1/

Assignment-2/

Assignment-3/

Assignment-4/

Assignment-5/

README.md

**Assignment Details**

🔹 Assignment 1: Smart Contract Development
Developed a basic smart contract using Solidity
Stores and retrieves a value on blockchain
Covers:
State variables
Functions
Basic contract structure

🔹 Assignment 2: Smart Contract Deployment
Deployed contract on blockchain test network:
Sepolia / Polygon Amoy
Learned:
Gas fees
Transactions
Wallet interaction using MetaMask

🔹 Assignment 3: Web DApp + MetaMask Integration
Built a frontend using:
HTML, CSS, JavaScript
Integrated:
MetaMask
ethers.js
Features:
Connect wallet
Interact with smart contract via browser

🔹 Assignment 4: IPFS Integration
Used Pinata (IPFS service) for decentralized storage
Features:
Upload file to IPFS
Generate CID (Content Identifier)
Retrieve file using CID via gateway

🔹 Assignment 5: DAO Smart Contract
Implemented a DAO (Decentralized Autonomous Organization)
Features:
Member management
Proposal creation
Voting system
Execution logic


**Tech Stack**
Solidity
Remix IDE
MetaMask
Ethers.js
HTML, CSS, JavaScript
Node.js
IPFS (Pinata)
Sepolia Testnet
Polygon Amoy Testnet

** How to Run Assignments**

▶️ Assignment 1 & 2 (Smart Contracts)
Open Remix IDE: https://remix.ethereum.org
Open .sol file
Compile contract
Go to Deploy & Run Transactions
Select Injected Provider (MetaMask)
Connect wallet
Select network:
Sepolia / Polygon Amoy
Click Deploy

▶️ Assignment 3 (Web DApp)
cd assignment-3
python -m http.server 3000

Open browser:

http://127.0.0.1:3000
Connect MetaMask
Interact with smart contract

▶️ Assignment 4 (IPFS)
cd assignment-4
npm install
node upload.js
node retrieve.js
Upload file → get CID
Retrieve file using CID

▶️ Assignment 5 (DAO Smart Contract)
Open Remix IDE
Compile DAO.sol
Deploy using MetaMask
Use functions:
createProposal()
vote()
executeProposal()
View using:
getProposal()

** Screenshots**

Each assignment folder contains execution screenshots as proof of working.

**Result**

All assignments were successfully implemented, demonstrating:

Smart contract development & deployment
Frontend blockchain interaction
Decentralized storage using IPFS
DAO-based governance system

** Conclusion**

This repository showcases a complete hands-on journey into Blockchain and Web3 development, covering:

On-chain logic (Smart Contracts)
Off-chain interaction (Frontend + MetaMask)
Decentralized storage (IPFS)
Governance systems (DAO)
