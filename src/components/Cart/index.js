import { useEffect, useState } from "react";
import Header from "../Header";
import Card from "../Home/Card";
import { GetingCardsFromLocalStorage } from "../helpers";

const Cart = () => {
    const [CartArray, setCartArray] = useState([]);
    
    useEffect(() => {
        setCartArray(GetingCardsFromLocalStorage());
    },[])
    return (
        <>
            <Header />
            <>
                {CartArray.map((item) => {
                    return (<Card 
                        key={item.title}
                        {...item}
                    />)
                })}
            </>
        </>
    )
}
export default Cart;
