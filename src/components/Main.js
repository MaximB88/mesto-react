import React from "react"
import api from '../utils/Api';
import Card from './Card';

function Main(props) {
    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        Promise.all([api.getUserInfo(), api.getCards()])
            .then(([userData, data]) => {
                setUserName(userData.name)
                setUserDescription(userData.about)
                setUserAvatar(userData.avatar)
                setCards(data)
            })
            .catch(err => console.log(`Ошибка: ${err}`))
    }, []);
    
    return(
        <main className="main">
            <section className="profile">
                <div className="profile__user">
                    <div className="profile__avatar-block">
                        <img src={userAvatar} alt="Аватар" className="profile__avatar" />
                        <button className="profile__edit-avatar-button" onClick={props.onEditAvatar}></button>
                    </div>
                    <div className="profile__info">
                        <div className='profile__account'>
                            <h1 className="profile__account-name">{userName}</h1>
                            <button type="button" className="button profile__edit-button" onClick={props.onEditProfile}></button>
                        </div>
                        <p className="profile__description">{userDescription}</p>
                    </div>
                </div>
                <button type="button" className="button profile__add-button" onClick={props.onAddPlace}></button>
            </section>
            <section className="photo">
                {cards.map((data) => (
                    <Card data={data} key={data._id} onCardClick={props.onCardClick}/>
                ))}
            </section>
      </main>
    )
}

export default Main