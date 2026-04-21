**Assignment 1: Smart Contract Development**

Objective

The objective of this assignment is to understand the basics of Solidity smart contract development by creating a simple contract that can store and retrieve a value on the blockchain.

Contract Description

This smart contract is designed to store and retrieve a single unsigned integer value.
It demonstrates fundamental concepts of Solidity such as:

State variables
Public and external functions
Blockchain data persistence

Functions and Logic     Function	Description
set(uint256 _value)	    Stores a given integer value in the blockchain
get()                 	Returns the currently stored value

The set function updates the state variable, while the get function allows users to read the stored value without modifying the blockchain.

**Compilation and Deployment Steps**

Open Remix IDE: https://remix.ethereum.org
Create a new file named contract.sol
Paste the smart contract code into the file
Navigate to the Solidity Compiler tab
Select compiler version 0.8.x
Click on Compile contract.sol

**Deployment**

Go to the Deploy & Run Transactions tab
Select Environment: Injected Provider - MetaMask
Connect your MetaMask wallet
Choose a test network (e.g., Sepolia)
Click Deploy and confirm the transaction
