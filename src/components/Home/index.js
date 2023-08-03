import { useEffect, useState } from "react";
import Header from "../Header";
import { dataAPI } from "../helpers";
import Card from "./Card";
import "./style.css"

const Home = () => {

    const [cardsArray, setCardsArray] = useState([]);

    const gettingCards = async() => {
        const response = await fetch(dataAPI);
        const data = response.json();
        data.then(item => setCardsArray(item));
    }
    useEffect(() => {
        gettingCards()
    }, [])

    return (
        <>
            <Header />
            <div className="CardsDiv Content">
                {
                    cardsArray.map((item) => {
                        return (<Card 
                            key={item.title}
                            {...item}
                        />)
                    })
                }
            </div>
        </>
    )
}
export default Home;