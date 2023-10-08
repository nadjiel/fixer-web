import { useState } from "react";
import { FaPen, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { DeleteModal } from "../demand/DeleteModal";

export function ResourceButtons({ toEdit, onDeleteConfirm, hideEdit }) {
  const [open, setOpen] = useState(false);

  function close() {
    setOpen(false);
  }

  return (
    <div className="fixed bottom-20 z-10 right-0 p-5 w-full flex-row justify-between">
      <button
        onClick={() => setOpen(true)}
        className="px-3 py-2 bg-red-500 text-white rounded-full font-medium text-base"
      >
        <FaTrash /> Apagar
      </button>

      {!hideEdit && (
        <Link
          to={toEdit}
          className="px-3 py-2 bg-secondary-400 rounded-full font-medium text-base"
        >
          <FaPen /> Editar
        </Link>
      )}
      {open && (
        <DeleteModal isOpen={true} close={close} onConfirm={onDeleteConfirm} />
      )}
    </div>
  );
}
