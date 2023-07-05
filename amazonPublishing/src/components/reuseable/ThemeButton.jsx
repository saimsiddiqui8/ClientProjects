import "./Button.css"

const ThemeButton = ({ name, id, click, type, value, classe }) => {
  const murge = `btn px-4 mt-2 hbtn hb-fill-right ${classe}`;
  return (
    <>
      <button id={id} className={murge} type={type} value={value} onClick={click}>{name}</button>
    </>
  )
}

export default ThemeButton;