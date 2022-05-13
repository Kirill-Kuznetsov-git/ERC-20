// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "./ERCinterface.sol";

contract ERC20 is ERCInterface {
    string private greeting;

    constructor() {
        greeting = "Hello, world!";
        console.log("Deploying a Greeter with greeting:", greeting);
        greeting = greeting;
    }

    function greet() public view returns (string memory) {
        return greeting;
    }

    function setGreeting(string memory _greeting) public {
        console.log("Changing greeting from '%s' to '%s'", greeting, _greeting);
        greeting = _greeting;
    }
}
