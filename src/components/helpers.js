import Cart from "./Cart";
import Favourites from "./Favourites";
import Home from "./Home";

export const headerData = [
    {
        path: "/",
        name: "Home"
    },
    {
        path: "/cart",
        name: "Cart"
    },
    {
        path: "/favourites",
        name: "Favourites"
    },
     
]
export const myRoutes = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/cart",
        element: <Cart />
    },
    {
        path: "/favourites",
        element: <Favourites />
    }
]
export const dataAPI = "https://online-shop-react.vercel.app/cardsList.json";
export const imageAPI = "https://online-shop-react.vercel.app/";

export const GetingCardsFromLocalStorage = () => {
    if (localStorage.getItem("CartArray")) {
        return JSON.parse(localStorage.getItem("CartArray"));
    } else {
        localStorage.setItem('CartArray', JSON.stringify([]));
        return [];
    }
}

export const GetingFavouritesFromLocalStorage = () => {
    if (localStorage.getItem("FavouritesArray")) {
        return JSON.parse(localStorage.getItem("FavouritesArray"));
    } else {
        localStorage.setItem('FavouritesArray', JSON.stringify([]));
        return [];
    }
}