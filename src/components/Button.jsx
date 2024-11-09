const Button = ({ text, btnFn }) => {
  return (
    <button
      className="my-4 flex w-32 items-center justify-center rounded bg-white px-2 py-1 text-xl font-bold text-emerald-950 shadow-md transition-all duration-300 hover:bg-emerald-950 hover:text-white"
      onClick={btnFn}
    >
      {text}
    </button>
  );
};

export default Button;
