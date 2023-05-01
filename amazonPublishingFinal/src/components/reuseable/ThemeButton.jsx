import "./Button.css"

const ThemeButton = ({name, id, click,type,value}) => {
  return (
    <>
      <button  id={id} className="btn px-4 mt-2" type={type} value={value} onClick={click}>{name}</button>
    </>
  )
}

export default ThemeButton;