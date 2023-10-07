export function EditInput({ inputName, typeInput, idInput, value }) {
  return (
    <div className="gap-2">
      <label htmlFor={idInput} className="font-normal text-base">{inputName}</label>
      <input
        className="bg-secondary-200 py-2 px-3 rounded-s-3xl"
        type={typeInput}
        value={value}
        id={idInput}
      />
    </div>
  );
}
