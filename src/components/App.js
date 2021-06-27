import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import PopupEditProfile from './PopupEditProfile';
import PopupAddPlace from './PopupAddPlace';
import PopupChangeAvatar from './PopupChangeAvatar';
import ImagePopup from './ImagePopup';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import api from '../utils/api';
import React from 'react';


function App() {
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(null);
    const [currentUser, setCurrentUser] = React.useState({});
    //const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        Promise.all([api.getUserInfo()])
            .then(([userData]) => {
                setCurrentUser(userData);
            })
            .catch(err => console.log(`Ошибка: ${err}`))
    }, []);
    
    function handleAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }

    function handleCardClick(data) {
        setSelectedCard(data)
    }

    function closeAllPopups() {
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setSelectedCard(null);
    }

    function handleUpdateUser(data) {
        api.setUserInfo(data)
            .then(userData => {
                setCurrentUser(userData);
                closeAllPopups();
            })
            .catch(err => console.log(`Ошибка: ${err}`))
    }
    
    return (
        <CurrentUserContext.Provider value={currentUser}>
            <Header />
            <Main 
                onEditProfile={handleEditProfileClick} 
                onAddPlace={handleAddPlaceClick} 
                onEditAvatar={handleAvatarClick} 
                onCardClick={handleCardClick} 
                //cards={cards} 
                />
            <Footer />
            <PopupEditProfile isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
            <PopupAddPlace isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
            <PopupChangeAvatar isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}/>
            <ImagePopup data={selectedCard !== null && selectedCard} onClose={closeAllPopups} />  
        </CurrentUserContext.Provider>
  );
}

export default App;
