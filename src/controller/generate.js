import MerkleTree from "merkletreejs";
import formatData from "../helpers/format-data";
import keccak256 from "keccak256";
const generate = (data) => {
  try {
    const data_format = formatData(data);
    const leafNodes = data_format.map((addr) => keccak256(addr));
    const merkleTree = new MerkleTree(leafNodes, keccak256, {
      sortPairs: true,
    });

    return {
      merkleTree: merkleTree,
      root: merkleTree.getRoot(),
      rootHex: merkleTree.getHexRoot(),
    };
  } catch (error) {
    throw error;
  }
};

export default generate;
