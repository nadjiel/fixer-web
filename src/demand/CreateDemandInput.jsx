export function CreateDemandInput({
  labelValue,
  typeInput,
  inputId,
  placeholderValue,
}) {
  return (
    <>
      <div>
        <label
          htmlFor={inputId}
          className="text-base font-normal text-primary font-fira mt-3"
        >
          {labelValue}
        </label>
        {typeInput === "file" ? (
          <input
            type={typeInput}
            accept="image/*"
            id={inputId}
            className="input-demand"
          />
        ) : (
          <input
            type={typeInput}
            placeholder={placeholderValue}
            id={inputId}
            className="input-demand"
          />
        )}
      </div>
    </>
  );
}
