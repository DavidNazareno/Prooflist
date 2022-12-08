import { useState } from "react";
import IconArrowRight from "./assets/arrow-right.svg";
import generate from "./controller/generate";
import getHexProof from "./controller/get-hex-proof";
import { CodeBlock, monokai } from "react-code-blocks";
import TextArea from "./components/textarea/TextArea";
import Input from "./components/input/Input";
import Logo from "./components/logo/Logo";
import IconGithub from "./assets/github.svg";

function App() {
  const [data, setData] = useState("");
  const [merkle, setMerkle] = useState(null);
  const [dataGetHexProof, setDataGetHexProof] = useState("");
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
    const result = getHexProof(merkle.merkleTree, dataGetHexProof);
    setHexProof(result);
  };

  return (
    <div className="App container mx-auto flex flex-col gap-6 py-10 justify-center h-full">
      <div className="flex w-full justify-between items-center">
        <Logo />
        <a href="https://github.com/DavidNazareno" target="_blank">
          {" "}
          <img
            className="w-12 transition-all  hover:border-4 border-primary box-border rounded-full"
            src={IconGithub}
          />
        </a>
      </div>

      <div className="grid overflow-hidden grid-cols-1   md:grid-cols-3 gap-2 ">
        <div className="flex gap-4 flex-col box p-4 box-border col-span-2 bg-secondary">
          <div className="flex w-full justify-between items-center">
            <h1 className="uppercase font-bold text-xl">Whitelist Array</h1>
            <button
              onClick={generateMerkle}
              className="bg-primary p-2 rounded-sm"
            >
              <img className="w-6 block mx-auto" src={IconArrowRight} />
            </button>
          </div>

          <TextArea
            placeholder="0x0000,0x0000,0x0000"
            rows="10"
            onChange={(e) => handleChangeData(e.target.value)}
          />

          <div className="block w-full overflow-auto relative bg-background  rounded-sm p-2  ">
            <span className="text-sm">ROOT: {merkle && merkle.root}</span>
            <br />
            <span className="text-sm">
              ROOT HEX: {merkle && merkle.rootHex}
            </span>
          </div>
        </div>
        <div className="flex flex-col p-4 gap-2 box  row-span-2 col-span-2 md:col-span-1 bg-secondary">
          <h1 className="uppercase font-bold  text-xl">Generate Proof</h1>
          <div className="flex gap-2">
            <Input
              placeholder="Address"
              onChange={(e) => handleChangeHexdata(e.target.value)}
            />
            <button
              onClick={generateProof}
              className="bg-primary p-2 rounded-sm"
            >
              <img className="w-6 block mx-auto" src={IconArrowRight} />
            </button>
          </div>
          <div className="block w-full overflow-auto relative bg-background  rounded-sm p-2   h-full">
            <pre className="text-sm">
              HEX: {hexProof && JSON.stringify(hexProof)}
            </pre>
          </div>
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
    </div>
  );
}

export default App;
