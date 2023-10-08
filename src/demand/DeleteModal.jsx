import { AiOutlineClose } from "react-icons/ai";
import { MdDone } from "react-icons/md";

export function DeleteModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 items-center justify-center">
      <div
        style={{ boxShadow: "0 0.5rem 1rem #0004" }}
        className="p-2 rounded-lg gap-4 max-w-sm fixed z-20 bg-white"
      >
        <div className="font-medium">Você deseja mesmo apagar isso?</div>
        <div className="flex-row justify-around">
          <button onClick={onClose}>
            <AiOutlineClose /> Cancelar
          </button>
          <button>
            <MdDone /> Confirmar
          </button>
        </div>
      </div>
    </div>
  );
}
