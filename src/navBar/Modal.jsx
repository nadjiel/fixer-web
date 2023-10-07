import { AiOutlineClose } from "react-icons/ai";
import { MdDone } from "react-icons/md";

export function Modal({ isOpen, onClose, children }) {
  if(!isOpen) return null;

  return (
    <div className="fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-md px-16 py-16">
      {children}
      <div>
        <button onClick={ onClose }><AiOutlineClose /> Cancelar</button>
        <button><MdDone /> Confirmar</button>
      </div>
    </div>
  );
}
