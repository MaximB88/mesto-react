import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
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
        <body className="page">
            <Header />
            <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleAvatarClick} onCardClick={handleCardClick}/>
            <Footer />
            <PopupWithForm isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} name="edit" title="Редактировать профиль" />
            <PopupWithForm isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} name="add" title="Новое место" />
            <PopupWithForm isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} name="change-avatar" title="Обновить автар" />
            <ImagePopup data={selectedCard !== null && selectedCard} onClose={closeAllPopups} />

            <article className="popup popup_type_edit">
                <form name="edit-profile" className="popup__form" noValidate>
                    <button type="button" className="button popup__close-button popup__close-button_type_edit"></button>
                    <h3 className="popup__name">Редактировать профиль</h3>
                    <input id="name-input" type="text" name ="name" className="popup__input" placeholder="Имя" required minLength="2" maxLength="40" />
                    <span className="popup__input-error name-input-error"></span>
                    <input id="info-input" type="text" name ="about" className="popup__input" placeholder="О себе" required minLength="2" maxLength="200" />
                    <span className="popup__input-error info-input-error"></span>
                    <button type="submit" className="button popup__save-button popup__save-button_type-edit">Сохранить</button>
                </form>
            </article>

            <article className="popup popup_type_add">
                <form name="add-card" className="popup__form" noValidate>
                    <button type="button" className="button popup__close-button popup__close-button_type_add"></button>
                    <h3 className="popup__name">Новое место</h3>
                    <input id="place-name-input" type="text" name ="name" className="popup__input" placeholder="Название" required minLength="2" maxLength="30" />
                    <span className="popup__input-error place-name-input-error"></span>
                    <input id="place-link-input" type="url" name ="link" className="popup__input" placeholder="Ссылка на картинку" required />
                    <span className="popup__input-error place-link-input-error"></span>
                    <button type="submit" className="button popup__save-button popup__save-button_type_add">Создать</button>
                </form>
            </article>

            <article className="popup popup_type_show">
                <div className="popup__container popup__container_type_show">
                    <button className="popup__close-button popup__close-button_type_show"></button>
                    <img src="#" alt="фото" className="popup__photo" />
                    <p className="popup__description"></p>
                </div>
            </article>

            <article className="popup popup_type_accept">
                <form name="accept" className="popup__form" noValidate>
                    <button type="button" className="button popup__close-button popup__close-button_type_accept"></button>
                    <h3 className="popup__name">Вы уверены?</h3>
                    <button className="button popup__save-button popup__save-button_type_accept">Да</button>
                </form>
            </article>

            <article className="popup popup_type_change-avatar">
                <form name="change-avatar" className="popup__form">
                    <button type="button" className="button popup__close-button popup__close-button_type_change-avatar"></button>
                    <h3 className="popup__name">Обновить автар</h3>
                    <input id="avatar-link-input" type="url" name ="link" className="popup__input" placeholder="Ссылка на картинку" required />
                    <span className="popup__input-error avatar-link-input-error"></span>
                    <button className="button popup__save-button popup__save-button_type_change-avatar">Сохранить</button>
                </form>
            </article>  
        </body>
  );
}

export default App;
