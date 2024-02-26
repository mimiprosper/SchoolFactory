// SPDX-License-Identifier: MIT
const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const StudentRegistryFactory = await ethers.getContractFactory(
    "StudentRegistryFactory"
  );
  const studentRegistryFactory = await StudentRegistryFactory.deploy();

  console.log(
    "StudentRegistryFactory address:",
    studentRegistryFactory.address
  );

  // Optionally, you can call functions on the deployed contract
  // For example, let's call createStudentRegistry() after deployment
  await studentRegistryFactory.createStudentRegistry();
  const deployedRegistriesCount =
    await studentRegistryFactory.getDeployedRegistriesCount();
  console.log(
    "Number of deployed registries:",
    deployedRegistriesCount.toString()
  );

  console.log("Done!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
