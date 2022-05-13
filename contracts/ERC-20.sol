// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ERC20 {
    address owner;
    mapping(address => uint256) private _balances;
    mapping(address => mapping(address => uint256)) private _allowances;
    uint8 constant private DECIMALS = 18; // 1 token = 1 wei
    string private _name;
    string private _symbol;
    uint256 private _totalTokens;

    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint value);

    modifier enoughTokens(address from, uint256 value){
        require(balanceOf(from) >= value, 'not enough tokens');
        _;
    }

    modifier onlyOwner(){
        require(msg.sender == owner, 'not an owner');
        _;
    }

    constructor(string memory name_, string memory symbol_, uint256 initialSupply, address account){
        _name = name_;
        _symbol = symbol_;
        owner = msg.sender;
        mint(account, initialSupply);
    }

    function name() public view returns(string memory){
        return _name;
    }
    function symbol() public view returns(string memory){
        return _symbol;
    }
    function decimals() public pure returns(uint8){
        return DECIMALS;
    }
    function totalSupply() public view returns(uint256){
        return _totalTokens;
    }

    function balanceOf(address ownerTokens) public view returns(uint256){
        return _balances[ownerTokens];
    }
    function allowance(address ownerTokens, address spender) public view returns(uint256){
        return _allowances[ownerTokens][spender];
    }

    function transfer(address to, uint256 value) public enoughTokens(msg.sender, value) returns(bool){
        _balances[msg.sender] -= value;
        _balances[to] += value;
        emit Transfer(msg.sender, to, value);
        return true;
    }

    function transferFrom(address from, address to, uint256 value) public enoughTokens(msg.sender, value)  returns(bool){
        _balances[from] -= value;
        _balances[to] += value;
        emit Transfer(from, to, value);
        return true;
    }

    function approve(address spender, uint256 value) public returns(bool){
        _allowances[msg.sender][spender] = value;
        emit Approval(msg.sender, spender, value);
        return true;
    }

    function burn(address account, uint256 amount) public onlyOwner{
        _balances[account] -= amount;
        _totalTokens -= amount;
    }

    function mint(address account, uint256 amount) public onlyOwner{
        _balances[account] += amount;
        _totalTokens += amount;
    }
}
