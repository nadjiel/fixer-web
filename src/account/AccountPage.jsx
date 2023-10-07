import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavBarComponent } from "../navBar/NavBarComponent.jsx";

export const AccountPage = () => {
  return (
    <div className="h-full">
      <div>
        <FontAwesomeIcon icon="fa-solid fa-user" />
        <h1>Home</h1>
      </div>
      <button className="bg-blue-400 px-4 py-2">Likes</button>
      <button className="bg-blue-400 px-4 py-2">Demandas</button>
      <button className="bg-yellow-400 px-4 py-2">Editar</button>
      <button className="bg-red-600 px-4 py-2">Sair</button>

      <NavBarComponent nameActive="account" />
    </div>
  );
};
