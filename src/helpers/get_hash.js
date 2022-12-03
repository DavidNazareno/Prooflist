import Web3 from "web3"
const getHash =(data)=>{
    return Web3.utils.keccak256(data);
}

export default getHash;