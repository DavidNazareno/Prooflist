import keccak256 from "keccak256";
const getHexProof = (merkleTree, data) => {
  try {
    const k_data = keccak256(data);
    const hex_proof = merkleTree.getHexProof(k_data);
    return hex_proof;
  } catch (error) {
    throw error;
  }
};

export default getHexProof;
