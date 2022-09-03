var ProductPayment = artifacts.require('./ProductPayment.sol');
module.exports = function(_deployer) {
  _deployer.deploy(ProductPayment);
};
