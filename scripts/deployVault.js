
async function main() {


    const [deployer] = await ethers.getSigners();
    console.log(deployer,"deployer")
    const controller = await ethers.getContractFactory("BundleVault");
    console.log(controller)
    const contract = await  controller.deploy("0x5A5d64b2Ae3cEd13b38A79f3a40a912Bbd2e8017","0x620F9998cf912F38030610690e2F164A54F5d44b","0xC792746196Cb489C50D2b0126192338DE5339189","0x6C16b7325Bf773B406A6501183626cC737529Ea4");
    console.log("Contract deployed at:", contract.address);
  
  }
  
  
  
  main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
  });
  


