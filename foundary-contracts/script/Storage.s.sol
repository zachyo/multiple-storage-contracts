// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.2;

import {Script, console} from "forge-std/Script.sol";
import {Storage} from "../src/Storage.sol";

contract DeployStorage is Script {
    Storage public storageContract;

    function setUp() public {}

    function run() public {
        vm.startBroadcast();

        storageContract = new Storage();

        vm.stopBroadcast();
        console.log("Storage deployed at:", address(storageContract));
    }
}