import React from 'react';
import PopupWithForm from './PopupWithForm';

function PopupAddPlace(props) {
    return(
        <PopupWithForm name="change-avatar" title="Добавить место" buttonText="Сохранить" isOpen={props.isOpen} onClose={props.onClose}>
            <input id="place-name-input" type="text" name ="name" className="popup__input" placeholder="Название" required minLength="2" maxLength="30" />
            <span className="popup__input-error place-name-input-error"></span>
            <input id="place-link-input" type="url" name ="link" className="popup__input" placeholder="Ссылка на картинку" required />
            <span className="popup__input-error place-link-input-error"></span>
        </PopupWithForm>
    )
}

export default PopupAddPlace;