// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract ProductPayment {
  uint public transactionCount = 0;
  

  struct Transaction{
    uint transactionID;
    uint productID;
    uint price;
    bool completed;
  }

  mapping(uint => Transaction) public transactions;

  function createTransaction(uint  _productID,uint  _price) public{
    transactionCount++;
    transactions[transactionCount] = Transaction(transactionCount,_productID,_price,false);
  }
}
