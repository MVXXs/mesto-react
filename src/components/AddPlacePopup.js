import {useState} from "react";
import PopupWithForm from "./PopupWithForm";


export default function AddPlacePopup(props) {
    const [name, setName] = useState({});
    const [link, setLink] = useState({});

    function handleNameChange(evt) {
        setName(evt.target.value);
    }

    function handleLinkChange(evt) {
        setLink(evt.target.value);
    }

    function handleSubmit(evt) {
        evt.preventDefault();

        props.onAddPlace({
            name,
            link,
        });
    }

    return (
    <PopupWithForm name="add" title="Новое место" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit} buttonText={'Создать'}>
        <div className="popup__field">
            <input type="text" name="name" className="popup__input popup__input_type_title" id="title" placeholder="Название" minLength="2" maxLength="30" onChange={handleNameChange} required />
            <span className="popup__error title-error"></span>
        </div>
        <div className="popup__field">
            <input type="url" name="about" className="popup__input popup__input_type_link" id="link" placeholder="Ссылка на картинку" onChange={handleLinkChange} required />
            <span className="popup__error link-error"></span>
        </div>
    </PopupWithForm>
    )
}