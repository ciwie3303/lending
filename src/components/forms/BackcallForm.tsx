import {Dispatch, SetStateAction, useState} from 'react'

import style from './backcallform.module.scss'

interface IFormProps {
    modalIsOpen: boolean
    setModalIsOpen: Dispatch<SetStateAction<boolean>>
}
let token = '';
let  chat_id = '';

export const BackcallForm = ( {modalIsOpen, setModalIsOpen}: IFormProps ) => {
    const [name, setName] = useState ( '' )
    const [phone, setPhone] = useState ( '' )
    const [quest, setQuest] = useState ( '' )
    const backcall = ( e: any ) => {
        e.preventDefault ()
        setModalIsOpen ( modalIsOpen => !modalIsOpen )
        document.body.style.overflow = ''
    }
    const sendMessage = () => {
        if (name.length > 2 && phone.length > 5) {
            fetch(
                `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=*Новая заявка catlense.ru*%0A%0A*Имя:*%20${name}%0A*Телефон:*%20${phone}%0A*Вопрос:*%20${quest}&parse_mode=Markdown`
              )
              alert('Ваша заявка успешно отправлена!')
        }
        setName ( '' )
        setPhone ( '' )
        setQuest ( '' )
    }

    return (
        <div className={`${style.popupWrapper} ${modalIsOpen ? style.popupWrapperActive : ''}`}>
            <div className={style.container}>
                <div className={style.close} onClick={( e ) => backcall ( e )}>&times;</div>
                <h1>Заполните форму и мы вам перезвоним как можно скорее!</h1>
                <input type="text" placeholder="Ваше имя" onChange={( {target} ) => setName ( target.value )}
                       value={name}/>
                <input type="phone" pattern="[0-9]*" placeholder="Ваш телефон"
                       onChange={( {target} ) => setPhone ( target.value )} value={phone}/>
                <input type="text" placeholder="Ваш вопрос" onChange={( {target} ) => setQuest ( target.value )}
                       value={quest}/>
                <button onClick={( e ) => {
                    sendMessage ()
                    backcall ( e )
                }}>
                    Заказать звонок
                </button>
            </div>
        </div>
    )
}