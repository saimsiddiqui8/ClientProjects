import "./Button.css"
const ThemeButtonLight = ({name, click}) => {
    return (
        <>
            <button type="button" id="btn2" className="px-4 btn hbtn2 hb-fill-right2" onClick={click}>{name}</button>
        </>
    )
}
export default ThemeButtonLight;