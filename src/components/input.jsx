export default function Input({
  label = "Label",
  type = "text",
  placeholder = "Enter a value",
  value = "",
  onChange = () => {},
  showLabel= true,
  defaultValue = ""
}) {
  return (
    <fieldset className="flex flex-col w-full mb-4">
      {showLabel && <label className="mb-2">{label}</label>}
      <input
        className="border border-gray-300 rounded p-2"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}

        
      />
    </fieldset>
  );
}
