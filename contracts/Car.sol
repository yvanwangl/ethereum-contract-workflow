pragma solidity ^0.5.11;

contract Car {
  string public brand;

  constructor(string memory initialBrand) public {
    brand = initialBrand;
  }

  function setBrand(string memory newBrand) public {
    brand = newBrand;
  }
}