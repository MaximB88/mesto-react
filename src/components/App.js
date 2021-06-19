import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import PopupEditProfile from './PopupEditProfile';
import PopupAddPlace from './PopupAddPlace';
import PopupChangeAvatar from './PopupChangeAvatar';
import ImagePopup from './ImagePopup';
import React from 'react';


function App() {
    
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(null)

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
    
    return (
        <>
            <Header />
            <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleAvatarClick} onCardClick={handleCardClick}/>
            <Footer />
            <PopupEditProfile isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
            <PopupAddPlace isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
            <PopupChangeAvatar isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}/>
            <ImagePopup data={selectedCard !== null && selectedCard} onClose={closeAllPopups} />  
        </>
  );
}

export default App;
