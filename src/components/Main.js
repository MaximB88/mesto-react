import React from "react"

class Main extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <main className="main">
            <section className="profile">
                <div className="profile__user">
                    <div className="profile__avatar-block">
                        <img src="#" alt="Аватар" className="profile__avatar" />
                        <button className="profile__edit-avatar-button" onClick={this.props.onEditAvatar}></button>
                    </div>
                    <div className="profile__info">
                        <div className='profile__account'>
                            <h1 className="profile__account-name">Жак-Ив Кусто</h1>
                            <button type="button" className="button profile__edit-button" onClick={this.props.onEditProfile}></button>
                        </div>
                        <p className="profile__description">Исследователь океана</p>
                    </div>
                </div>
                <button type="button" className="button profile__add-button" onClick={this.props.onAddPlace}></button>
            </section>
            <section className="photo">
            </section>
          </main>
        )
    }
}

export default Main