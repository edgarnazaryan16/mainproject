import { useEffect, useState } from "react";
import { GetingCardsFromLocalStorage, imageAPI } from "../../helpers";
import "./style.css"
const Card = ({title, price, articul, color, imgSrc}) => {
    const [image, setImage] = useState();
    const fetchImage = async() => {
        const response = await fetch(`${imageAPI}${imgSrc}`);
        const data = await response.blob()
    }
    const handleCardAdding = () => {
        const temp = GetingCardsFromLocalStorage();
        localStorage.setItem('CartArray', JSON.stringify([...temp, {
            title: title,
            price: price,
            articul: articul,
            color: color,
            imgSrc: imgSrc
        }]))
    }
    useEffect(() => {
        fetchImage()
    }, [])
    return (
        <div className="Card">
            <img className="image" src={imgSrc ? (`${imageAPI}${imgSrc}`) : (`${imageAPI}img/notfound.png`)}/>
            <div className="Description">
                <h3>{title}</h3>
                <p>
                    <span>Color: {color}</span>
                    {/* <span className="Dot" style={{background: `${color}`}}></span> */}
                </p>
                <p>
                    Articul: {articul}
                </p>
                <p>
                    Price: {price}
                </p>
                <button className="AddToFav">F</button>
                <button className="AddToCart" onClick={handleCardAdding}>Add to card</button>
            </div>
        </div>
    )
}
export default Card;