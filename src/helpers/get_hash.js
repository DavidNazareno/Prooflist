
import keccak256 from "keccak256";
const getHash = (data) => {
  
  return keccak256(data);
};

export default getHash;
