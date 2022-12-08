import IconLogo from "../../assets/logo.png";
const Logo = () => {
  return (
    <div className="flex items-center justify-start">
      <img  src={IconLogo} className=" h-12 w-12" alt="Vite logo" />
      <span className="uppercase font-bold   text-xl">PROOFLIST</span>
    </div>
  );
};
export default Logo;
