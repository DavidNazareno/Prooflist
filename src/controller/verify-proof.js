import getHash from "../helpers/get_hash";

const verifyProof = (merkle,data,hexProof,rootHash) =>{
    try {
        const k_data = getHash(data);
        const validate = merkle.verify(hexProof, k_data, rootHash);
        return validate;
    } catch (error) {
        throw error;
    }
}

export default verifyProof;