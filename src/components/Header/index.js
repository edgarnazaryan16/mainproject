import { Link } from "react-router-dom"
import { headerData, imageAPI } from "../helpers"
import "./style.css"
const Header = () => {
    return (
        <div className="Header">
            <div className="Content">
                <img className="img" src={`${imageAPI}/img/logo2.png`}/>
                <div className="nav">
                    {
                        headerData.map(({path, name}) => {
                            return <Link to={path} key={name}>{name}</Link>
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default Header;