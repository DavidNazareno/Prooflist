import getHash from "../helpers/get_hash";

const getHexProof = (merkleTree,data) =>{
    try {
        
        const k_data = getHash(data);
        const hex_proof = merkleTree.getHexProof(k_data);
        return hex_proof;
    } catch (error) {
        throw error;
    }
}

export default getHexProof;