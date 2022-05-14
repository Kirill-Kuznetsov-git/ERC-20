```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
npx hardhat help
REPORT_GAS=true npx hardhat test
npx hardhat coverage
npx hardhat run scripts/deploy.ts
TS_NODE_FILES=true npx ts-node scripts/deploy.ts
npx hardhat verify --network ropsten DEPLOYED_CONTRACT_ADDRESS
```

# Important
1) You have to rename file .env.example to .env and change it(don't change CONTRACT_ADDRESS_ROPSTEN if you don't want to deploy new contract)
2) If you want to test contract on the localhost, you have to add CONTRACT_ADDRESS_LOCALHOST to .env file when contact will be deployed.
3) At the default, tasks are trying to find contract with address CONTRACT_ADDRESS_ROPSTEN, so to change it, you have to go to .env file and change variable NETWORK to localhost


# Start
1) git clone ...
2) cd ./ERC-20
3) npm install
4) npx hardhat compile