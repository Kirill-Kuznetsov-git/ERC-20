/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  Overrides,
  BigNumberish,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC20, ERC20Interface } from "../ERC20";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "initialSupply",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "ownerTokens",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "ownerTokens",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200272e3803806200272e833981810160405281019062000037919062000730565b6200006b7f9f2ff8cd265a1f39df57e351c6aa39dcc808da715a70c83f2172a07b1412b41b60001b6200029960201b60201c565b6200009f7fd71dad761feb16aa1687d7c5cea073adfdf37bbb89ff51a781ccfa8d013996aa60001b6200029960201b60201c565b620000d37fceb298cbe11e3cb331bb48512325c874aacd9381273a6b4da9f79cd8d1d1261a60001b6200029960201b60201c565b8360039080519060200190620000eb929190620005e0565b50620001207fedcdadd43aebe0cc3764c41ed8acc7aefdac7b62ec5e30ca4fc6c59be621f57560001b6200029960201b60201c565b620001547f7af2e4ca36119fe8a42c61841dc3d98fa160eb99c32f67b5b3f3f85c1c09e15260001b6200029960201b60201c565b82600490805190602001906200016c929190620005e0565b50620001a17f138acb7a6ce3035b5a5ba859f18727624b7e2c841b901282081b0f73f4f943e460001b6200029960201b60201c565b620001d57f91e47e5e30c8c14d7e67bcd91190a4233e5bdf722762d9884e9156b7a32908fd60001b6200029960201b60201c565b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550620002497f46488f16d03640efe5d3fca570fa4c3c6fbc652b97a01eb0c3094dd5fcd521ae60001b6200029960201b60201c565b6200027d7f63d5cac7f3eb34cab6d5d6441f3f2c31231edb04caeb60f606fab90d6c5f9a8760001b6200029960201b60201c565b6200028f81836200029c60201b60201c565b5050505062000abf565b50565b620002d07f6d427a446e0bfddad640046c8ac4ec1068c87cfdf4bff34df3a198563903b27d60001b6200029960201b60201c565b620003047f546c4e7dcd616620e05c0081290618784178d0aa9455efb2dbb04446e9d9507d60001b6200029960201b60201c565b620003387fb0a154e29219a17c09bb54e262c5f9620f45dc0019430b3e8a9e7b7e482c999460001b6200029960201b60201c565b6200036c7f088ecbfe4a58de5589f0c7291433b0e59c474cd7da816456eea1725bd770da4060001b6200029960201b60201c565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614620003fd576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620003f490620007f5565b60405180910390fd5b620004317f8f5e7d24bb8934bc6ce71534ea4a72feaff8891bd8b3d1bbd7a1b4aca274344460001b6200029960201b60201c565b620004657fea46ec3bf310e5159545f95dca1de5e75e0a32221487fabf2080187d56bd637660001b6200029960201b60201c565b620004997f37bf201226687ec9d5cdfe99eef791855589aebb4b030f7c5da5279a015f658360001b6200029960201b60201c565b620004cd7f61e625871245a52a0600477b397db299d9ba00871d9a5eac7a0c34a6866f0bee60001b6200029960201b60201c565b620005017f6d79b48ec4326153c4487b78e6d9a9e5998211813612729d57d3d701de29f2c860001b6200029960201b60201c565b80600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825462000552919062000887565b925050819055506200058d7f0cd0533cfa3502f86fc7c7b94874e00285f6f41e0a972d455149d4cd7388526a60001b6200029960201b60201c565b620005c17f73407a869c95966118dee4476f4d9586307f41abee14663561895d04dc72b07760001b6200029960201b60201c565b8060056000828254620005d5919062000887565b925050819055505050565b828054620005ee9062000958565b90600052602060002090601f0160209004810192826200061257600085556200065e565b82601f106200062d57805160ff19168380011785556200065e565b828001600101855582156200065e579182015b828111156200065d57825182559160200191906001019062000640565b5b5090506200066d919062000671565b5090565b5b808211156200068c57600081600090555060010162000672565b5090565b6000620006a7620006a18462000840565b62000817565b905082815260208101848484011115620006c057600080fd5b620006cd84828562000922565b509392505050565b600081519050620006e68162000a8b565b92915050565b600082601f830112620006fe57600080fd5b81516200071084826020860162000690565b91505092915050565b6000815190506200072a8162000aa5565b92915050565b600080600080608085870312156200074757600080fd5b600085015167ffffffffffffffff8111156200076257600080fd5b6200077087828801620006ec565b945050602085015167ffffffffffffffff8111156200078e57600080fd5b6200079c87828801620006ec565b9350506040620007af8782880162000719565b9250506060620007c287828801620006d5565b91505092959194509250565b6000620007dd600c8362000876565b9150620007ea8262000a62565b602082019050919050565b600060208201905081810360008301526200081081620007ce565b9050919050565b60006200082362000836565b90506200083182826200098e565b919050565b6000604051905090565b600067ffffffffffffffff8211156200085e576200085d62000a22565b5b620008698262000a51565b9050602081019050919050565b600082825260208201905092915050565b6000620008948262000918565b9150620008a18362000918565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115620008d957620008d8620009c4565b5b828201905092915050565b6000620008f182620008f8565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b838110156200094257808201518184015260208101905062000925565b8381111562000952576000848401525b50505050565b600060028204905060018216806200097157607f821691505b60208210811415620009885762000987620009f3565b5b50919050565b620009998262000a51565b810181811067ffffffffffffffff82111715620009bb57620009ba62000a22565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f6e6f7420616e206f776e65720000000000000000000000000000000000000000600082015250565b62000a9681620008e4565b811462000aa257600080fd5b50565b62000ab08162000918565b811462000abc57600080fd5b50565b611c5f8062000acf6000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c806340c10f191161007157806340c10f191461016857806370a082311461018457806395d89b41146101b45780639dc29fac146101d2578063a9059cbb146101ee578063dd62ed3e1461021e576100a9565b806306fdde03146100ae578063095ea7b3146100cc57806318160ddd146100fc57806323b872dd1461011a578063313ce5671461014a575b600080fd5b6100b661024e565b6040516100c39190611942565b60405180910390f35b6100e660048036038101906100e1919061183f565b610364565b6040516100f39190611927565b60405180910390f35b61010461058a565b60405161011191906119a4565b60405180910390f35b610134600480360381019061012f91906117f0565b610618565b6040516101419190611927565b60405180910390f35b610152610a19565b60405161015f91906119bf565b60405180910390f35b610182600480360381019061017d919061183f565b610aa6565b005b61019e6004803603810190610199919061178b565b610d8b565b6040516101ab91906119a4565b60405180910390f35b6101bc610e58565b6040516101c99190611942565b60405180910390f35b6101ec60048036038101906101e7919061183f565b610f6e565b005b6102086004803603810190610203919061183f565b611253565b6040516102159190611927565b60405180910390f35b610238600480360381019061023391906117b4565b611653565b60405161024591906119a4565b60405180910390f35b606061027c7f3d9c0806ce6fc2fffb63c2b88c3ebcc921b93cae971fb80268a5d77e2390e0a160001b61175e565b6102a87fe1d23dbde4bc1bbeaf89d60f9ed22d3b716cc47087758b5744780d77b556468160001b61175e565b6102d47fecbeea2dff91bf2673aa89fe9f729084076ac80d08b1c23b745bf606b4e4149060001b61175e565b600380546102e190611b08565b80601f016020809104026020016040519081016040528092919081815260200182805461030d90611b08565b801561035a5780601f1061032f5761010080835404028352916020019161035a565b820191906000526020600020905b81548152906001019060200180831161033d57829003601f168201915b5050505050905090565b60006103927ff621650f234ecb9bd57fa505eba8ae516ec4b0e166d3226255bd12aebf0e6e7d60001b61175e565b6103be7f600f86009837bdb48800727c5297eafa819b86b20a0bad53500bdef24f72b5f760001b61175e565b6103ea7f2bc708a22c51e2d69ba1d662f79ca18b21deac06b761e7401d7e97a97d263dd960001b61175e565b81600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506104977f998e9fbe6a0b9a8c6a0c9e9221f101678b30dd54177bc7228494e21693f2203d60001b61175e565b6104c37fed26028d91650b77c62eb304e0fb8fa52e9456fb369534495b65cef730f5775f60001b61175e565b8273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161052091906119a4565b60405180910390a36105547f43cdc9ae4ecf3c96c01fe1511a7f7c58dda1830fabe9f6b609133a3403e6b3fc60001b61175e565b6105807f7785c9c2e5b4473a01e162799e9cb1039936d2d11d3408dcc8e65a67968e539d60001b61175e565b6001905092915050565b60006105b87fe99aba25b5c35b3c8e66d106001bd46b298802405abd267ed8895777b65c6fe260001b61175e565b6105e47f6e7d44b31f9086b77f22117af2edc0ce020e32dd827d9a4c17cc1c234c2df82960001b61175e565b6106107fbb5e6ae0a8e8424a99bcd3068984119e0cd6163591c79cfc4befc69f1819a1ce60001b61175e565b600554905090565b600033826106487f567e17dcb0d9aeeee148b04c8f1f4a91eddfaac48129415c138fa2290e13137760001b61175e565b6106747f460445e717713f54a08ec3068034a2ab5dd4028879aa85a14501557afeab431160001b61175e565b6106a07fb4c191bde90a6fe6bf4582ab57790d2ac68e487de43f4a740ce2651b8eb95bb860001b61175e565b6106cc7fa9fd7ea807df01efee2be073be19390b95d5642e7a3e54aff9408c2777e6401060001b61175e565b806106d683610d8b565b1015610717576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161070e90611964565b60405180910390fd5b6107437f7d2bb440f1ba052d2b903054640823f937cd742eea9076752453c55f1edd978960001b61175e565b61076f7f031299612a0246fa45a6c0c92486013287c434d7eaf95f7613c78abbb03573ed60001b61175e565b61079b7f5c718b996c3ed6bcf5fb15a27a17b4bbd3aa3d7c440cf8ca8366a32a28e3a82960001b61175e565b6107c77f4ae4493c75c196473b43331f9b6ad67c4a6a709c80e708296dff36a97168fbe860001b61175e565b6107f37fbf538b342c9744e9497caad602f9428f53c8e546f7e401615011de6f03a48da060001b61175e565b83600160008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546108429190611a4c565b925050819055506108757fc1903c61e6ee5c06ec64f3e1d6008315251f7611488046a7d80e19c0510e489c60001b61175e565b6108a17f8be9e47c95525c744074aad68b067f97ae0bde26de31496b7db376402cdddbeb60001b61175e565b83600160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546108f091906119f6565b925050819055506109237f5d4b107eb1407b47e2b83eded9d7c72a1672ac33f37150a78424b31bad0630e860001b61175e565b61094f7f9648b40298a45b029c19a99f0ede55a69e4b40bbd2f48c2c722749d53817e13a60001b61175e565b8473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef866040516109ac91906119a4565b60405180910390a36109e07f5ce909366417fc8b6f3b0725017b396eca244c9700813835b9fb054fb40ae18760001b61175e565b610a0c7fb706f592ac579290332e1898ea0db01aa2d8c53120609eaddfed4530c6c4a6b360001b61175e565b6001925050509392505050565b6000610a477f65ae5a908e55fae873a04661aae088847e41352bbcfb58591c753d3e3231003160001b61175e565b610a737f7b13f7931af07d7d4fbc8f37fcb284c2b6dd8bf0c73507cfffd4155beb67b83660001b61175e565b610a9f7f992f64b7579ee101bc22a0bc2573168ff087ad7c4dccbd9d1b98055a034eb2aa60001b61175e565b6012905090565b610ad27f6d427a446e0bfddad640046c8ac4ec1068c87cfdf4bff34df3a198563903b27d60001b61175e565b610afe7f546c4e7dcd616620e05c0081290618784178d0aa9455efb2dbb04446e9d9507d60001b61175e565b610b2a7fb0a154e29219a17c09bb54e262c5f9620f45dc0019430b3e8a9e7b7e482c999460001b61175e565b610b567f088ecbfe4a58de5589f0c7291433b0e59c474cd7da816456eea1725bd770da4060001b61175e565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610be4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bdb90611984565b60405180910390fd5b610c107f8f5e7d24bb8934bc6ce71534ea4a72feaff8891bd8b3d1bbd7a1b4aca274344460001b61175e565b610c3c7fea46ec3bf310e5159545f95dca1de5e75e0a32221487fabf2080187d56bd637660001b61175e565b610c687f37bf201226687ec9d5cdfe99eef791855589aebb4b030f7c5da5279a015f658360001b61175e565b610c947f61e625871245a52a0600477b397db299d9ba00871d9a5eac7a0c34a6866f0bee60001b61175e565b610cc07f6d79b48ec4326153c4487b78e6d9a9e5998211813612729d57d3d701de29f2c860001b61175e565b80600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610d0f91906119f6565b92505081905550610d427f0cd0533cfa3502f86fc7c7b94874e00285f6f41e0a972d455149d4cd7388526a60001b61175e565b610d6e7f73407a869c95966118dee4476f4d9586307f41abee14663561895d04dc72b07760001b61175e565b8060056000828254610d8091906119f6565b925050819055505050565b6000610db97f60d69110a82f10e77cc43c75eea66bd7fe249c29d827b6b4b61bbce2c0db57cf60001b61175e565b610de57fae547afc5c440d6afdf7af50333ee76fc9f4d18b2212fb48a5cec491177c9bc060001b61175e565b610e117f1bece86de5d7c264cf2060e2c827fef192e078e1ffba12cf2d6c1b8f5591b04b60001b61175e565b600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060610e867fef7111ae0466c13b87758cc9fee57b7d168ac966dc958b11db26da615526eecc60001b61175e565b610eb27f5b9a3e2fb428acca0dc116a3620bed37984b3c7dc828d6e11bacdfceee8f163d60001b61175e565b610ede7f3bac4b3f3dc153d7d8671d164cd7071e553dffee6ca61e3080ae4fcc188484b260001b61175e565b60048054610eeb90611b08565b80601f0160208091040260200160405190810160405280929190818152602001828054610f1790611b08565b8015610f645780601f10610f3957610100808354040283529160200191610f64565b820191906000526020600020905b815481529060010190602001808311610f4757829003601f168201915b5050505050905090565b610f9a7f6d427a446e0bfddad640046c8ac4ec1068c87cfdf4bff34df3a198563903b27d60001b61175e565b610fc67f546c4e7dcd616620e05c0081290618784178d0aa9455efb2dbb04446e9d9507d60001b61175e565b610ff27fb0a154e29219a17c09bb54e262c5f9620f45dc0019430b3e8a9e7b7e482c999460001b61175e565b61101e7f088ecbfe4a58de5589f0c7291433b0e59c474cd7da816456eea1725bd770da4060001b61175e565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146110ac576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110a390611984565b60405180910390fd5b6110d87f8f5e7d24bb8934bc6ce71534ea4a72feaff8891bd8b3d1bbd7a1b4aca274344460001b61175e565b6111047fea46ec3bf310e5159545f95dca1de5e75e0a32221487fabf2080187d56bd637660001b61175e565b6111307ff2fb8e8eeb3be9a2fd62d839f58c8c687c18cf8320db2c56886c0beba60535e060001b61175e565b61115c7fb2b598a83a617ea19d481dba76bc0b3b70627fa29fe7f1fffa2e20944c68f22b60001b61175e565b6111887fda789ee0e4a211271b233c9868ae7d5ac9355deffd22e655a61b80cdb226864b60001b61175e565b80600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546111d79190611a4c565b9250508190555061120a7f7825762b6389d71f839ac5e51c63edd7e33df96eb4a6a62325cf9d22138a331860001b61175e565b6112367f69394d7f08af9c1e2f7b65b2258b61ea6e4d14fb3452bff78f04c23b3552ddf160001b61175e565b80600560008282546112489190611a4c565b925050819055505050565b600033826112837f567e17dcb0d9aeeee148b04c8f1f4a91eddfaac48129415c138fa2290e13137760001b61175e565b6112af7f460445e717713f54a08ec3068034a2ab5dd4028879aa85a14501557afeab431160001b61175e565b6112db7fb4c191bde90a6fe6bf4582ab57790d2ac68e487de43f4a740ce2651b8eb95bb860001b61175e565b6113077fa9fd7ea807df01efee2be073be19390b95d5642e7a3e54aff9408c2777e6401060001b61175e565b8061131183610d8b565b1015611352576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161134990611964565b60405180910390fd5b61137e7f7d2bb440f1ba052d2b903054640823f937cd742eea9076752453c55f1edd978960001b61175e565b6113aa7f031299612a0246fa45a6c0c92486013287c434d7eaf95f7613c78abbb03573ed60001b61175e565b6113d67f321c9161981c6afede28c4cd5aa43e63daf741608fec89d5c9bcb6bf8d862cb160001b61175e565b6114027f94cb5533c379ed4ddc4bde6a2d2c5f4130ad4f7e78eb975d70b5a9fb2fc100b460001b61175e565b61142e7fc64e80a20ac218e7274d3375da02d714828b7cfd917624eb418b5b281f2150b660001b61175e565b83600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461147d9190611a4c565b925050819055506114b07ffaa82470b30d86c2b68df000652061b2b6941999f002749451c9473996be327160001b61175e565b6114dc7f3baeb2f00ade797ca62c82e4c15bf51b1678b672213c0361bc8fbbefe5b8a3d260001b61175e565b83600160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461152b91906119f6565b9250508190555061155e7f66902048d17091af08774a45a314c69624a80985a82f28022e31e5f43a826dda60001b61175e565b61158a7fff6f5eabeda6c3b6d2f4a48fa85cf47b8fc9b1af3cd83cd26c676e46ec5c65b960001b61175e565b8473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef866040516115e791906119a4565b60405180910390a361161b7fce5b4834dd59085822acd9405175b8c6011b3abd2455e471dc5b4a5e72e34dcd60001b61175e565b6116477f4d93627ce82149dc8e33f0cd2b009f7c9cb4fd0ca919521763c3e05bada80c6560001b61175e565b60019250505092915050565b60006116817f6ed53d8d7474c1f1f6746fa1caa574ae011c03193ce30f8dd754b4c0b5d6694a60001b61175e565b6116ad7f2257283f00aa66030cc9a87e0178ed58553714036beb867b294357d0ef809f9260001b61175e565b6116d97f513fc4bcda3f8b27597ba8f6afd0d9bf9897109024927fb589ee4437e92f498460001b61175e565b600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b50565b60008135905061177081611bfb565b92915050565b60008135905061178581611c12565b92915050565b60006020828403121561179d57600080fd5b60006117ab84828501611761565b91505092915050565b600080604083850312156117c757600080fd5b60006117d585828601611761565b92505060206117e685828601611761565b9150509250929050565b60008060006060848603121561180557600080fd5b600061181386828701611761565b935050602061182486828701611761565b925050604061183586828701611776565b9150509250925092565b6000806040838503121561185257600080fd5b600061186085828601611761565b925050602061187185828601611776565b9150509250929050565b61188481611a92565b82525050565b6000611895826119da565b61189f81856119e5565b93506118af818560208601611ad5565b6118b881611b98565b840191505092915050565b60006118d06011836119e5565b91506118db82611ba9565b602082019050919050565b60006118f3600c836119e5565b91506118fe82611bd2565b602082019050919050565b61191281611abe565b82525050565b61192181611ac8565b82525050565b600060208201905061193c600083018461187b565b92915050565b6000602082019050818103600083015261195c818461188a565b905092915050565b6000602082019050818103600083015261197d816118c3565b9050919050565b6000602082019050818103600083015261199d816118e6565b9050919050565b60006020820190506119b96000830184611909565b92915050565b60006020820190506119d46000830184611918565b92915050565b600081519050919050565b600082825260208201905092915050565b6000611a0182611abe565b9150611a0c83611abe565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611a4157611a40611b3a565b5b828201905092915050565b6000611a5782611abe565b9150611a6283611abe565b925082821015611a7557611a74611b3a565b5b828203905092915050565b6000611a8b82611a9e565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b83811015611af3578082015181840152602081019050611ad8565b83811115611b02576000848401525b50505050565b60006002820490506001821680611b2057607f821691505b60208210811415611b3457611b33611b69565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b7f6e6f7420656e6f75676820746f6b656e73000000000000000000000000000000600082015250565b7f6e6f7420616e206f776e65720000000000000000000000000000000000000000600082015250565b611c0481611a80565b8114611c0f57600080fd5b50565b611c1b81611abe565b8114611c2657600080fd5b5056fea264697066735822122057cd24c8ef300f33950454efe932e9aad6964b587a588f77af127f2157c4920664736f6c63430008040033";

type ERC20ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20__factory extends ContractFactory {
  constructor(...args: ERC20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ERC20";
  }

  deploy(
    name_: string,
    symbol_: string,
    initialSupply: BigNumberish,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC20> {
    return super.deploy(
      name_,
      symbol_,
      initialSupply,
      account,
      overrides || {}
    ) as Promise<ERC20>;
  }
  getDeployTransaction(
    name_: string,
    symbol_: string,
    initialSupply: BigNumberish,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      name_,
      symbol_,
      initialSupply,
      account,
      overrides || {}
    );
  }
  attach(address: string): ERC20 {
    return super.attach(address) as ERC20;
  }
  connect(signer: Signer): ERC20__factory {
    return super.connect(signer) as ERC20__factory;
  }
  static readonly contractName: "ERC20";
  public readonly contractName: "ERC20";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20Interface {
    return new utils.Interface(_abi) as ERC20Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC20 {
    return new Contract(address, _abi, signerOrProvider) as ERC20;
  }
}
