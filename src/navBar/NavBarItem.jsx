function firstLetterUppercase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const NavBarItem = ({ link, imgSrc, namePage, isActive }) => {
  if (isActive) {
    console.log("Modificação a ser feita")
  }
  return (
    <a href={link}>
      <img src={imgSrc} alt={namePage} />
      <p>{firstLetterUppercase(namePage)}</p>
    </a>
  );
};
