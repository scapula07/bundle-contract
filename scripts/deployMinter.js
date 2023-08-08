
async function main() {


  const [deployer] = await ethers.getSigners();
  console.log(deployer,"deployer")
  const controller = await ethers.getContractFactory("Minter");
  console.log(controller)
  const contract = await  controller.deploy("0x620F9998cf912F38030610690e2F164A54F5d44b","0xC792746196Cb489C50D2b0126192338DE5339189","10000","10000000");
  console.log("Contract deployed at:", contract.address);

}



main().catch((error) => {
console.error(error);
process.exitCode = 1;
});

