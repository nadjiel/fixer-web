export function CreateDemandInput({
  labelValue,
  typeInput,
  inputId,
  placeholderValue,
}) {
  return (
    <>
      <div>
        <label htmlFor={inputId}>{labelValue}</label>
        {typeInput === "file" ? (
          <input type={typeInput} accept="image/*" id={inputId} />
        ) : (
          <input type={typeInput} placeholder={placeholderValue} id={inputId} />
        )}
      </div>
    </>
  );
}
