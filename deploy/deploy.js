const { ethers } = require("hardhat");

async function main() {

    const [deployer] = await ethers.getSigners();

    console.log(
        "Deploying contracts with the account:",
        deployer.address
    );

    const SecretNFT = await ethers.getContractFactory("SecretNFT");
    // console.log('SecretNFT', SecretNFT);
    
    const contract = await SecretNFT.deploy(deployer.address);
    await contract.deployed();
    console.log("Contract deployed at:", contract.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });