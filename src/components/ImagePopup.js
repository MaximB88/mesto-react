function ImagePopup() {
    return(
        <article className="popup popup_type_show">
          <div className="popup__container popup__container_type_show">
              <button className="popup__close-button popup__close-button_type_show"></button>
              <img src="#" alt="фото" className="popup__photo" />
              <p className="popup__description"></p>
          </div>
      </article>
    )
}

export default ImagePopup;