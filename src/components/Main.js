function Main() {
    return(
        <main className="main">
        <section className="profile">
            <div classNames="profile__user">
                <div className="profile__avatar-block">
                    <img src="#" alt="Аватар" className="profile__avatar" />
                    <button className="profile__edit-avatar-button" onClick={handleAvatarClick}></button>
                </div>
                <div className="profile__info">
                    <div className='profile__account'>
                        <h1 className="profile__account-name">Жак-Ив Кусто</h1>
                        <button type="button" className="button profile__edit-button" onClick={handleEditProfileClick}></button>
                    </div>
                    <p className="profile__description">Исследователь океана</p>
                </div>
            </div>
            <button type="button" className="button profile__add-button" onClick={handleAddPlaceClick}></button>
        </section>
        <section className="photo">
        </section>
      </main>
    )

    function handleAvatarClick() {
        document.querySelector('.popup_type_add').classList.add('popup_opened');
    };

    function handleEditProfileClick () {
        document.querySelector('.popup_type_edit').classList.add('popup_opened');
    };

     function handleAddPlaceClick () {
        document.querySelector('.popup_type_add').classList.add('popup_opened');
    };
}

export default Main