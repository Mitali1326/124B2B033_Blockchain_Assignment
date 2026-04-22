
# Assignment 5: DAO Smart Contract

##  Objective
To implement a DAO (Decentralized Autonomous Organization) smart contract that allows members to create proposals, vote on them, and execute decisions in a decentralized manner.

---

## Files Included
- DAO.sol → Smart contract source code
- README.md → Documentation
- Screenshots → Proof of execution

---

## Tech Stack Used
- Solidity (v0.8.x)
- Remix IDE
- MetaMask Wallet
- Polygon Amoy Testnet (optional)

---

##  Contract Overview

This DAO contract includes:
- Member management system
- Proposal creation
- Voting mechanism
- Proposal execution

---

##  DAO Workflow

1. Contract is deployed by the owner
2. Owner is automatically added as a member
3. Owner adds new members
4. Members create proposals
5. Members vote on proposals before deadline
6. Proposal is executed after deadline

---

##  Proposal Structure

Each proposal contains:
- Description → What the proposal is about
- Vote Count → Number of votes received
- Deadline → Voting time limit
- Executed → Whether proposal is executed

---

## Voting Mechanism

- Only registered members can vote
- Each member can vote only once per proposal
- Voting allowed only before deadline
- Votes are counted using `voteCount`

---

##  Functions Description

### addMember(address _member)
- Adds a new member
- Only owner can call this function

### createProposal(string _desc, uint _duration)
- Creates a new proposal
- Only members can call
- Duration is in seconds

### vote(uint proposalId)
- Vote for a proposal
- One vote per member
- Voting must be before deadline

### executeProposal(uint proposalId)
- Executes proposal after deadline
- Requires at least 1 vote

### getProposal(uint id)
- Returns proposal details

---

##  How to Run (Step-by-Step)

### Step 1: Open Remix
Go to: https://remix.ethereum.org

### Step 2: Create File
Create file → `DAO.sol`

### Step 3: Paste Code
Paste your smart contract code

### Step 4: Compile
- Go to Solidity Compiler
- Select version 0.8.x
- Click Compile

### Step 5: Deploy
- Go to Deploy & Run
- Select environment → Injected Provider (MetaMask)
- Click Deploy

---

##  Testing Steps

1. Add member using `addMember(address)`
2. Create proposal using `createProposal()`
3. Vote using `vote()`
4. Wait for deadline
5. Execute using `executeProposal()`
6. Check using `getProposal()`

---

##  Screenshots Required

Include:
- Contract deployment
- Member addition
- Proposal creation
- Voting process
- Execution result

---

## Result
The DAO smart contract successfully enables decentralized governance through proposals and voting.

---

## 💡 Conclusion
This project demonstrates how blockchain enables decentralized decision-making without a central authority, using smart contracts for transparency and trust.
