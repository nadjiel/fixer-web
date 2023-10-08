export function EditInput({ inputName, typeInput, idInput, placeholder  }) {
    return (
      <div className="gap-2">
        <label htmlFor={idInput} className="font-normal text-base">{inputName}</label>
        <input
          className="bg-secondary-200 py-2 px-11 rounded-3xl"
          placeholder={placeholder}
          type={typeInput}
          id={idInput}
        />
      </div>
    );
  }
  