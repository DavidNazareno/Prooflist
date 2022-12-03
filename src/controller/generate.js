import MerkleTree from "merkletreejs";
import Web3 from "web3";
import getHash from "../helpers/get_hash";
import formatData from "./format-data";

const generate = (data) => {
   
  try {
    const data_format = formatData(data);
    const leafNodes = data_format.map((addr) => getHash(addr));
    

    const merkleTree = new MerkleTree(leafNodes, Web3.utils.keccak256, {
      sortPairs: true,
    });

    return {merkleTree:merkleTree,root: merkleTree.getRoot()};
  } catch (error) {
    console.log(error);
    //throw error;
  }
};

export default generate;