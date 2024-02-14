// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {

    const wallets = await hre.ethers.getSigners();

    console.log("Deploying contracts with the account:", wallets[0].address);
    return;

    const lock = await hre.ethers.deployContract("AstroswapRouter", [
        "0x74D4c1a25324Cf72F00B72F5ca1429E6CAED81ba", "0x74D4c1a25324Cf72F00B72F5ca1429E6CAED81ba"
    ], {
        value: 0,
    });

    await lock.waitForDeployment();

    console.log(
        `deployed to ${lock.target}`
    );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
