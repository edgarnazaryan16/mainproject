import { useRoutes } from "react-router-dom"
import { myRoutes } from "../helpers"


const Myroute = () => {
    return (
        <>
            {useRoutes(myRoutes)}
        </>
    )
}
export default Myroute;