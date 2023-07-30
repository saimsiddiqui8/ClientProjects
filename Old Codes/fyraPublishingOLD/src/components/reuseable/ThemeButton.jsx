import "./Button.css"

const ThemeButton = ({name, id}) => {
  return (
    <>
      <button type="button" id={id} className="btn px-4 mt-2">{name}</button>
    </>
  )
}

export default ThemeButton;