import logo from "../logo.svg"
import "../styles/ReactInfo.css"

const ReactInfo = () => {
  return (
    <div className="ReactInfo">
      <header className="header"></header>
      <img src={logo} className="logo" alt="logo" />
      <div className="line-container">
        <div className="horizontal-line"></div>
        <div className="vertical-tick"></div>
      </div>
      <p className="title">This is the React logo!</p>
      <p className="subtitle">(I don't know why it is blue either)</p>
      <p className="subtitle2">The library for web and native user interfaces</p>
    </div>
  )
}
export default ReactInfo
