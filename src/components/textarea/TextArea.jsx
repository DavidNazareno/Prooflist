
const TextArea = ({ onChange, placeholder, required = false, ...props }) => {
  return (
    <>
      <textarea
        onChange={onChange}
        placeholder={placeholder}
        className={`flex-1 m-0 w-full bg-transparent  bg-background rounded-sm p-2 transition-all  border-primary border-2 resize-none`}
        {...props}
      />
    </>
  );
};
export default TextArea;
