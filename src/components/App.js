import {useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState('');

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }

    function closeAllPopups() {
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setSelectedCard('');
    }

    function handleCardClick(card) {
        setSelectedCard(card);
    }

  return (
    <div className="page">
    <Header />
    <Main onEditProfile={handleEditProfileClick} onEditAvatar={handleEditAvatarClick} onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick}/>
    <Footer />
    <PopupWithForm name="edit" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} buttonText={'Сохранить'}>
        <div className="popup__field">
            <input type="text" name="name" className="popup__input popup__input_type_name" id="name" placeholder="Имя" minLength="2" maxLength="40" required />
            <span className="popup__error name-error"></span>
        </div>
        <div className="popup__field">
            <input type="text" name="about" className="popup__input popup__input_type_about" id="about" placeholder="О себе" minLength="2" maxLength="200" required />
            <span className="popup__error about-error"></span>
        </div>
    </PopupWithForm>
    <PopupWithForm name="add" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} buttonText={'Создать'}>
        <div className="popup__field">
            <input type="text" name="name" className="popup__input popup__input_type_title" id="title" placeholder="Название" minLength="2" maxLength="30" required />
            <span className="popup__error title-error"></span>
        </div>
        <div className="popup__field">
            <input type="url" name="about" className="popup__input popup__input_type_link" id="link" placeholder="Ссылка на картинку" required />
            <span className="popup__error link-error"></span>
        </div>
    </PopupWithForm>
    <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} buttonText={'Сохранить'}>
        <div className="popup__field">
            <input type="url" name="avatar" className="popup__input popup__input_type_link" id="avatar-input" placeholder="Ссылка на картинку" required />
            <span className="popup__error avatar-input-error"></span>
        </div>
    </PopupWithForm>
    <PopupWithForm name="delete" title="Вы уверены?" buttonText="Да" />
    <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
