let provider;
let signer;
let contract;

const contractAddress = "0x608247E2296c7d14F81C45a5F8d77f69d9A799D2";

const abi = [
    {
        "inputs": [{"internalType": "uint256","name": "_data","type": "uint256"}],
        "name": "set",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "get",
        "outputs": [{"internalType": "uint256","name":"","type":"uint256"}],
        "stateMutability": "view",
        "type": "function"
    }
];

async function connectWallet() {
    if (window.ethereum) {
        provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        signer = provider.getSigner();

        const address = await signer.getAddress();
        document.getElementById("account").innerText = address;

        contract = new ethers.Contract(contractAddress, abi, signer);
    } else {
        alert("Install MetaMask");
    }
}

async function setValue() {
    const value = document.getElementById("value").value;
    const tx = await contract.set(value);
    await tx.wait();
    alert("Value Stored!");
}

async function getValue() {
    const value = await contract.get();
    document.getElementById("output").innerText = value;
}

