import { useEffect, useState } from "react";
import Header from "../Header";
import { GetingFavouritesFromLocalStorage } from "../helpers";
import Card from "../Home/Card";

const Favourites = () => {
    const [favouritesArray, setFavouritesArray] = useState([]);

    useEffect(() => {
        setFavouritesArray(GetingFavouritesFromLocalStorage());
    }, [])
    return (
        <>
            <Header />
            <>
                {favouritesArray.map((item) => {
                    return (<Card 
                        key={item.title}
                        {...item}
                    />)
                })}
            </>
        </>
    )
}
export default Favourites;