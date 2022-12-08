
const Input = ({ onChange, placeholder, required = false, ...props }) => {
    return (
      <>
       
        <input
              placeholder={placeholder}
              onChange={onChange}
              className="w-full text-sm border-2 rounded-sm p-2 border-primary bg-background"
              {...props}
            />
      </>
    );
  };
  export default Input;
  