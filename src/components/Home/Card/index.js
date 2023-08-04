import { useEffect, useState } from "react";
import { GetingCardsFromLocalStorage, GetingFavouritesFromLocalStorage, imageAPI } from "../../helpers";
import "./style.css"
const Card = ({title, price, articul, color, imgSrc, isFavouriteFromParent = false}) => {
    const [images, setImages] = useState([]);
    const [isFavourite, setIsFavourite] = useState(isFavouriteFromParent);
    const fetchImage = async() => {
        const response = await fetch(`${imageAPI}${imgSrc}`);
        // console.log(images)
        setImages([...images, response.url]);
    }
    const handleCardAdding = (title) => {
        const temp = GetingCardsFromLocalStorage();
        let isInArray = false;
        temp.forEach(element => {
            if(element.title === title) {
                isInArray = !isInArray;
            }
        });
        if (!isInArray) {
            localStorage.setItem('CartArray', JSON.stringify([...temp, {
            title: title,
            price: price,
            articul: articul,
            color: color,
            imgSrc: imgSrc,
        }]))
        }
    }
    const handleCardAddingToFavourites = (title) => {
        const temp = GetingFavouritesFromLocalStorage();
        let isInArray = false;
        temp.forEach(element => {
            if(element.title === title) {
                isInArray = !isInArray;
            }
        });
        if (!isInArray) {
            localStorage.setItem('FavouritesArray', JSON.stringify([...temp, {
                title: title,
                price: price,
                articul: articul,
                color: color,
                imgSrc: imgSrc,
                isFavourite: !isFavourite
            }]))
        } else {
            localStorage.setItem('FavouritesArray', JSON.stringify(temp.filter((item) => item.title !== title)))
        }
        setIsFavourite(!isFavourite);
    }

    useEffect(() => {
        fetchImage()
        GetingFavouritesFromLocalStorage().forEach(
            element => {
                if(element.title === title) {
                    setIsFavourite(true);
                }
            }
        )
    }, [title])
    return (
        <div className="Card">
            <img className="image" src={imgSrc ? (`${imageAPI}${imgSrc}`) : (`${imageAPI}img/notfound.png`)} alt="Something goes wrong"/>
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
                <button className="AddToFav" onClick={() => handleCardAddingToFavourites(title)} style={{color: isFavourite ? "yellow" : "white"}}>F</button>
                <button className="AddToCart" onClick={() => handleCardAdding(title)}>Add to card</button>
            </div>
        </div>
    )
}
export default Card;