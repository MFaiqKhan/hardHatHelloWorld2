/* 
///Basic Introduction/// of blockchain-CryptoCurrency

One of the implementation of blockchain is bitcoin.
bitcoin: where you are in the world, you can transfer the funds , it's borderless
  Problem with bitcoin , : it's not progammable . 
So ethereum was developed by vitalic buterin . 
we can create a decentralize application on top of ethereum and also can create my own toke/cryptocurrency
Blockchain is the immutable distributed ledger.
whenever we do a transaction, that transaction goes to few nodes , these nodes transfer to other nodes, then all these nodes present in the system -
- verifies the transaction and store it in transaction pool, bitcoin every 10 minutes nodes (In case of ethereum it's 15 Seconds) takes a transaction from the pool and generates a puzzle which matches 
- the hashcode or particular number, then let's say that a node solved the puzzle then it send the verification of puzzle to all the nodes and those nodes verify the puzzle solved than the node which
- have won can write that block on the database or blockchain we can say and then it starts again.
Ethereum can be considered a world computer or they are trying to achieve that, everything could be running 

developing of smartContracts will be using hardhat, for using complete development environment.
we can also directly develop it in Remix IDE but doesn't complete development environment.

////Step 00 hardhat helloworld ///////  --://hardhat.org/getting-started/---
  basic project have only 1 contract and you can add more to it.
  we will compile by npx hardhat compile, and compilation will compile our solidity code and generates
  it's byte code in ABI . 
  npx hardhat compile will create artifacts and cache folder.
  cache folder : will have detail of our code, content of the build folder, version etc. this information will be
  used by hardhat. 
  artifact: important is contracts/Greetor.sol then Greeter.json , in that we have 'abi', abi gives the interface of our contracts,
  and client can communicate by abi, it gives a json format interface of solidity code as abi so client application like js 
  can communicate with the smart contracts.
  Smart contract code is usually written in a high level programming language such as Solidity. 
  This code gets compiled to something called the EVM bytecode which gets deployed to the Ethereum blockchain. 
  This is very similar to a programming language like Java where the code gets converted to JVM Byte code.

  if you want to call a function in a smart contract with your JavaScript code, 
  ABI plays a role as an intermediary between your JavaScript code and EVM bytecode to interact with each other
  https://miro.medium.com/max/1200/1*y3MlDKVKoQcEv03UrCPEHA.png

  bytecode vs deployedBytecode in json file : they both are pretty much same when contract is not deployed
  but when contract is deployed then deployed will differ from current bytecode as after deployment you compiled it again .

  after code is compiled we can check it by test or deploy it. npx hardhat test

  Whenever in smartcontracts/blockchain there is a function or method which is updating or changing, it is a transaction and it will give a transaction ID or hash.
  so update through transaction id or Transaction Hash (Tx Hash).
  
  npm hardhat test will run js file in test folder and will show us output
  (calling contract from browser application through js)
  
  //To deploy we will use npx hardhat run scripts/sample-script.js
  hardhat will create a local blockchain and this blockchain will run our code and will give us output, blockchain will not be accessible by us.
  (hardhat creates a blockchain, run the contract deploy the contract gives us the address and kills the blockchain.)

  Browser based application(client) will be talking to the blockchain will need a address to talk to the smartContract

  npx hardhat node: it will create a blockchain, and will keep running until we doesn not exist the terminal,
  having 20 ethereum accounts having 10k eth.(this is a local network blockchain / node running on your computer locally)
  npx hardhat run scripts/sample-script.js --network localhost: then we can run this command in another terminal to deploy script in local network
  it will generate some few transactions and will show us , e.g: contract deployment : greeter , contract address: etc.
  block will very first as we are running in local network for ourselves , and will be provided a hask for that block
  it will also generate us console.log thanks to hardhat as gives us functionality to generate console log.

  In hardhat every function/method returns promise, so await is necessary

*/

