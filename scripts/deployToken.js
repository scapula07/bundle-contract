
async function main() {


    const [deployer] = await ethers.getSigners();
    console.log(deployer,"deployer")
    const controller = await ethers.getContractFactory("BundleToken");
    console.log(controller)
    const contract = await  controller.deploy(10,20);
    console.log("Contract deployed at:", contract.address);
  
  }
  
  
  
  main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
  });
  