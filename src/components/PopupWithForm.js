import React from "react";

class PopupWithForm extends React.Component {
    constructor(props) {
        super(props);
        this.props = {
            isOpen: this.props.isOpen,
        }
    }

    render() {
        const className = `${this.props.isOpen ? 'popup_opened' : ''} popup popup_type_${this.props.name}`;
        
        return(
            <article className={className}>
                <form name={`${this.props.name}`} className="popup__form" noValidate>
                    <button type="button" className="button popup__close-button popup__close-button_type_edit"></button>
                    <h3 className="popup__name">{this.props.title}</h3>
                    <button type="submit" className="button popup__save-button popup__save-button_type-edit">Сохранить</button>
                </form>
            </article>    
        )
    } 
}

export default PopupWithForm;