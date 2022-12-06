import { useState } from "react";
import ArrowRight from "./assets/arrow-right.svg";
import Copy from "./assets/copy.svg";
import generate from "./controller/generate";
import getHexProof from "./controller/get-hex-proof";
import { CodeBlock, monokai } from "react-code-blocks";
function App() {
  const [count, setCount] = useState(0);
  const [wallets, setWallets] = useState(null);
  const [data, setData] = useState("0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2,0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db,0x78731D3Ca6b7E34aC0F824c42a7cC18A495cabaB,0x617F2E2fD72FD9D5503197092aC168c91465E7f2");
  const [merkle, setMerkle] = useState(null);
  const [dataGetHexProof, setDataGetHexProof] = useState(null);
  const [hexProof, setHexProof] = useState(null);

  const handleChangeData = (data) => {
    setData(data);
  };

  const handleChangeHexdata = (data) => {
    setDataGetHexProof(data);
  };

  const generateMerkle = () => {
    const _merkle = generate(data);
    setMerkle(_merkle);
  };

  const generateProof = () => {
    console.log(merkle);
    const result = getHexProof(merkle.merkleTree, dataGetHexProof);
    setHexProof(result);
  };

  //0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2,0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db,0x78731D3Ca6b7E34aC0F824c42a7cC18A495cabaB,0x617F2E2fD72FD9D5503197092aC168c91465E7f2

  return (
    <div className="App container mx-auto flex flex-col justify-center h-full">
      <a
        href="https://vitejs.dev"
        className="flex py-6 items-center "
        target="_blank"
      >
        <img src="/logo.png" className=" h-12 w-12" alt="Vite logo" />
        <h1 className="uppercase font-bold  text-xl">PROOFLIST</h1>
      </a>

      <div className="grid overflow-hidden grid-cols-1   md:grid-cols-3 grid-rows-4 gap-2 ">
        <div className="flex gap-4 flex-col box row-span-4 p-4 box-border col-span-2 bg-secondary">
          <div className="flex w-full justify-between items-center">
            <h1 className="uppercase font-bold text-xl">Whitelist Array</h1>
            <button
              onClick={generateMerkle}
              className="bg-primary p-2 rounded-sm"
            >
              <img className="w-6 block mx-auto" src={ArrowRight} />
            </button>
          </div>
          <textarea
            onChange={(value) => handleChangeData(value.target.value)}
            placeholder="0x0000,0x0000,0x0000"
            className="flex-1 m-0 w-full bg-transparent border-2 bg-background rounded-sm p-2 border-primary resize-none"
          ></textarea>

          <div className="block w-full overflow-auto relative bg-background border-2 rounded-sm p-2 border-primary ">
            <span className="text-sm">
              BLOB: {merkle && JSON.stringify(merkle.root)}
            </span>
            <br />
            <span className="text-sm">ROOT: {merkle && merkle.root}</span>
          </div>
        </div>
        <div className="flex flex-col p-4 gap-2 box  row-span-2 col-span-2 md:col-span-1 bg-secondary">
          <h1 className="uppercase font-bold  text-xl">Generate Proof</h1>
          <div className="flex gap-2">
            <input
              placeholder="Address"
              onChange={(e) => handleChangeHexdata(e.target.value)}
              className="w-full text-sm border-2 rounded-sm p-2 border-primary bg-background"
            />
            <button
              onClick={generateProof}
              className="bg-primary p-2 rounded-sm"
            >
              <img className="w-6 block mx-auto" src={ArrowRight} />
            </button>
          </div>
          <div className="block w-full overflow-auto relative bg-background border-2 rounded-sm p-2 border-primary  h-full">
            <pre className="text-sm">
              HEX: {hexProof && JSON.stringify(hexProof)}
            </pre>
          </div>
        </div>
        <div className="flex gap-2 flex-col box  row-span-2 col-span-2  md:col-span-1 bg-secondary p-4">
          <div className="">
            <h1 className="uppercase font-bold  text-xl">Validate Hex Proof</h1>
          </div>
          <input
            placeholder="Address to validate"
            className="w-full text-sm border-2 rounded-sm p-2 border-primary bg-background"
          />
          <textarea
            placeholder="Hex proof"
            className="w-full text-sm h-full border-2 rounded-sm p-2 border-primary bg-background"
          />
          <button className="w-full bg-primary text-sm uppercase p-2 font-bold">
            Validate
          </button>
        </div>
      </div>

      <h1 className="uppercase font-bold my-5 text-xl"> Implementation</h1>
      <CodeBlock
        text={`import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";

modifier validateAddress(bytes32[] calldata _merkleProof,bytes32 _merkleRoot) {
  bytes32 leaf = keccak256(abi.encodePacked(msg.sender));
  require(MerkleProof.verify(_merkleProof, _merkleRoot, leaf),"You are not part ");
  _;
}
`}
        className="bg-background"
        language="typescript"
        showLineNumbers={false}
        theme={monokai}
      />
      <pre>{}</pre>
    </div>
  );
}

export default App;
