var Market = artifacts.require("./OnlineMarket.sol");

module.exports = function(deployer) {
  deployer.deploy(Market);
};
