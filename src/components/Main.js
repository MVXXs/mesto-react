import {useState, useEffect} from "react";
import {apiInfo} from '../utils/Api';
import Card from './Card';

export default function Main(props) {
    const [userName, setUserName] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [userAvatar, setUserAvatar] = useState('');
    const [cards, setCards] = useState([]);

    useEffect(() => {
        Promise.all([apiInfo.getInitialCards(), apiInfo.getUserInfo()])
            .then((res) => {
                setUserName(res[1].name);
                setUserDescription(res[1].about);
                setUserAvatar(res[1].avatar);
                setCards([...res[0]])
            })
    }, []);

  return (
    <main className="content">
        <section className="profile">
            <div className="profile__avatar">
                <img src={userAvatar} alt="аватарка пользователя" className="profile__image" onClick={props.onEditAvatar}/>
            </div>
            <div className="profile__info">
                <div className="profile__container">
                    <h1 className="profile__title">{userName}</h1>
                    <button className="profile__button-edit" type="button" onClick={props.onEditProfile}></button>
                </div>
                <p className="profile__subtitle">{userDescription}</p>
            </div>
            <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
        </section>
        <section className="elements">
            {cards.map((item) => (
                <Card card={item} name={item.name} link={item.link} likes={[...item.likes]} key={item._id} onCardClick={props.onCardClick}/>
            ))}
        </section>
    </main>
  )
}