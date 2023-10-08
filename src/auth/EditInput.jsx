export function EditInput({
  inputName,
  typeInput,
  idInput,
  placeholder,
  Icon,
}) {
  return (
    <div className="gap-2">
      <label htmlFor={idInput} className="font-normal text-base">
        {inputName}
      </label>
      <div className="flex-row w-full">
        <Icon size={24} className={"-mr-9 self-center h-6 z-10 text-secondary-400"} />
        <input
          className="bg-secondary-200 w-full z-0 py-2 px-11 rounded-3xl"
          placeholder={placeholder}
          type={typeInput}
          id={idInput}
        />
      </div>
    </div>
  );
}
