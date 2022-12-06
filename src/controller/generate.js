import MerkleTree from "merkletreejs";

import getHash from "../helpers/get_hash";
import formatData from "./format-data";
import keccak256 from "keccak256";
const generate = (data) => {
  try {
    //  const web3 = new Web3();
    const data_format = formatData(data);
    const leafNodes = data_format.map((addr) => getHash(addr));
    const merkleTree = new MerkleTree(leafNodes, keccak256, {
      sortPairs: true,
    });
    
    return { merkleTree: merkleTree, root: merkleTree.getHexRoot() };
  } catch (error) {
    console.log(error);
    //throw error;
  }
};

export default generate;
