const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTACT_ADDRESS;

const { ethers } = require("hardhat");
const contract = require("../artifacts/contracts/HelloWorld.sol/HelloWorld.json");

const alchemyProvider = new ethers.providers.AlchemyProvider(network="ropsten", API_KEY);

const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

const helloWorldContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer)

async function main() {
    const currentMessage = await helloWorldContract.message();
    console.log("The current message is: " + currentMessage);

    console.log("Updating the message...");
    const tx = await helloWorldContract.update("This is the new message");
    await tx.wait();

    const updatedMessage = await helloWorldContract.message();
    console.log("The updated message is: " + updatedMessage);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });