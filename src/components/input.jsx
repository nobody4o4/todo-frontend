export default function Input({
  label = "Label",
  type = "text",
  placeholder = "Enter a value",
  onChange = () => {},
  value = "",
}) {
  return (
    <fieldset className="flex flex-col w-full mb-4">
      <label className="mb-2">{label}</label>
      <input
        className="border border-gray-300 rounded p-2"
        type={type}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        value={value}
      />
    </fieldset>
  );
}
