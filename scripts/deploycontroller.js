
async function main() {


    const [deployer] = await ethers.getSigners();
    console.log(deployer,"deployer")
    const controller = await ethers.getContractFactory("Controller");
    console.log(controller)
    const contract = await  controller.deploy();
    console.log("Contract deployed at:", contract.address);

}



main().catch((error) => {
console.error(error);
process.exitCode = 1;
});
