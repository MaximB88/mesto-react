import React from 'react';
import PopupWithForm from './PopupWithForm';

function PopupChangeAvatar(props) {
    return(
        <PopupWithForm name="change-avatar" title="Обновить автар" buttonText="Сохранить" isOpen={props.isOpen} onClose={props.onClose}>
            <input id="avatar-link-input" type="url" name ="link" className="popup__input" placeholder="Ссылка на картинку" required />
            <span className="popup__input-error avatar-link-input-error"></span>
        </PopupWithForm>
    )
}

export default PopupChangeAvatar;