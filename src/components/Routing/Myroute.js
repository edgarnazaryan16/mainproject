import { useRoutes } from "react-router-dom"
import { myRoutes } from "../helpers"
import Home from "../Home";
import Cart from "../Cart";
import Favourites from "../Favourites";

const Myroute = () => {
    return (
        <>
            {useRoutes(myRoutes)}
        </>
    )
}
export default Myroute;