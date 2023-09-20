
import { ethers } from "hardhat";

const address = "0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199";

async function main() {

  const deploy_contract = await ethers.deployContract("AML_CFT_CCA", [address]);

  await deploy_contract.waitForDeployment();

  console.log("AML_CFT_CCA is deployed to : ",await deploy_contract.getAddress());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
