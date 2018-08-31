var MyToken = artifacts.require("./MyToken.sol");

module.exports = function(deployer) {
    const _name="Dapp Token";
    const _symbol="DAPP";
    const _decimals=18;

  deployer.deploy(MyToken,_name,_symbol,_decimals);
  
};
