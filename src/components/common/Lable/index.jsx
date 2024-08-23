export default function CustomLable({ htmlFor, text }) {
  return (
    <label
      htmlFor={htmlFor}
      className="text-md-14px-regular text-black-400 lg:text-xl-20px-regular"
    >
      {text}
    </label>
  );
}
