import { AiOutlineClose } from "react-icons/ai";
import { MdDone } from "react-icons/md";

export function DeleteModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 items-center justify-center bg-black/50 z-20">
      <div
        style={{ boxShadow: "0 0.5rem 1rem #0004" }}
        className="p-2 rounded-lg gap-4 max-w-sm fixed bg-white"
      >
        <div className="font-medium">Você deseja mesmo apagar isso?</div>
        <div className="flex-row justify-around">
          <button className="p-2" onClick={onClose}>
            <AiOutlineClose /> Cancelar
          </button>
          <button className="p-2">
            <MdDone /> Confirmar
          </button>
        </div>
      </div>
    </div>
  );
}
