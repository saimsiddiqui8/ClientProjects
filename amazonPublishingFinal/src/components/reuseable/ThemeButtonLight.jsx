import "./Button.css"
const ThemeButtonLight = ({name, click}) => {
    return (
        <>
            <button type="button" id="btn2" className="btn px-4" onClick={click}>{name}</button>
        </>
    )
}
export default ThemeButtonLight;