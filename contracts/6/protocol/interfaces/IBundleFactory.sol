// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;
interface IBundleFactory {
    function setController(address controller) external;

    function getController() external view returns (address);

    function deploy(
        string calldata name,
        string calldata symbol
    ) external returns (address bundle, address unbinder);
}
