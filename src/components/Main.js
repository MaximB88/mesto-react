import React from "react"
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Card from './Card';
import api from "../utils/api";

function Main(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        Promise.all([api.getCards()])
            .then(([data]) => {
                setCards(data)
            })
            .catch(err => console.log(`Ошибка: ${err}`))
    }, []);

    function handleCardLike(data) {
        const isLiked = data.likes.some(i => i._id === currentUser._id);
        api.changeLikeCount(data._id, !isLiked).then((newCard) => {
            setCards((state) => state.map((c) => c._id === data._id ? newCard : c));
        });
    }

    function handleCardDelete(data) {
        api.deleteCard(data._id);
    }

    return(
        <main className="main">
            <section className="profile">
                <div className="profile__user">
                    <div className="profile__avatar-block">
                        <img src={currentUser.avatar} alt="Аватар" className="profile__avatar" />
                        <button className="profile__edit-avatar-button" onClick={props.onEditAvatar}></button>
                    </div>
                    <div className="profile__info">
                        <div className='profile__account'>
                            <h1 className="profile__account-name">{currentUser.name}</h1>
                            <button type="button" className="button profile__edit-button" onClick={props.onEditProfile}></button>
                        </div>
                        <p className="profile__description">{currentUser.about}</p>
                    </div>
                </div>
                <button type="button" className="button profile__add-button" onClick={props.onAddPlace}></button>
            </section>
            <section className="photo">
                {cards.map((data) => (
                    <Card 
                        data={data} 
                        key={data._id} 
                        onCardClick={props.onCardClick}
                        onCardLike={handleCardLike}
                        onCardDelete={handleCardDelete} />
                ))}
            </section>
      </main>
    )
}

export default Main