import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import React from 'react';


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isEditProfilePopupOpen: this.props.isOpen,
            isAddPlacePopupOpen: this.props.isOpen,
            isEditAvatarPopupOpen: this.props.isOpen,
        }
    }

    handleAvatarClick = () => {
        this.setState({isEditAvatarPopupOpen: !this.state.isEditAvatarPopupOpen});
        console.log('tik')
        console.log(this.props.isOpen);
    };

    handleEditProfileClick = () => {
        this.setState({isEditProfilePopupOpen: !this.state.isEditProfilePopupOpen});
        console.log('tik')
    };

    handleAddPlaceClick = () => {
        this.setState({isAddPlacePopupOpen: !this.state.isAddPlacePopupOpen});
        console.log('tik')
    };

    render() {
        return (
            <body className="page">
                <Header />
                <Main onEditProfile={this.handleEditProfileClick} onAddPlace={this.handleAddPlaceClick} onEditAvatar={this.handleAvatarClick}/>
                <Footer />
                <PopupWithForm isOpen={false} name="edit" title="Редактировать профиль" />
                <PopupWithForm isOpen={false} name="add" title="Новое место" />
                <PopupWithForm isOpen={false} name="accept" title="Вы уверены?" />
                <PopupWithForm isOpen={false} name="change-avatar" title="Обновить автар" />
                <ImagePopup />
    
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
    
                <template id="new-post">
                    <div className="post">
                        <div className="post__photo-area">    
                            <img src="#" alt="#" className="post__photo" />
                            <button type="button" className="button post__delete-button"></button>
                        </div>  
                        <div className="post__description">
                            <h2 className="post__title"></h2>
                            <div className="post__likes">
                                <button type="button" className="button post__like-button"></button>
                                <p className="post__likes-count">2</p>
                            </div>
                        </div>
                    </div>
                </template>  
            </body>
      );
    }
}

export default App;
