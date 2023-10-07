export function CreateDemandInput({
  labelValue,
  typeInput,
  inputId,
  placeholderValue,
  Icon
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
        <Icon size={24} className={"relative -bottom-8 left-3 text-secondary-400"}/>
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
