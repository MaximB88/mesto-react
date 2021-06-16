import React from 'react';
import PopupWithForm from './PopupWithForm';

function PopupEditProfile(props) {
    return(
        <PopupWithForm name="edit" title="Редактировать профиль" buttonText="Сохранить" isOpen={props.isOpen} onClose={props.onClose}>
            <input id="name-input" type="text" name ="name" className="popup__input" placeholder="Имя" required minLength="2" maxLength="40" />
            <span className="popup__input-error name-input-error"></span>
            <input id="info-input" type="text" name ="about" className="popup__input" placeholder="О себе" required minLength="2" maxLength="200" />
            <span className="popup__input-error info-input-error"></span>
        </PopupWithForm>
    )
}

export default PopupEditProfile;