export function EditInput({ inputName, typeInput, idInput, value, Icon  }) {
  return (
    <div className="gap-2">
      <label htmlFor={idInput} className="font-normal text-base">{inputName}</label>
      <Icon size={24} className={"relative -bottom-10 left-3 text-secondary-400"}/>
      <input
        className="bg-secondary-200 py-2 px-11 rounded-3xl"
        type={typeInput}
        value={value}
        id={idInput}
      />
    </div>
  );
}
