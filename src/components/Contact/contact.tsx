import type {NextPage} from 'next';
import Image from 'next/image';
import React, {useContext, useState} from "react";
import contact from './contact.module.css';
import telegram from '../assets/img-contact/telegram.svg'
import email from '../assets/img-contact/email.svg'
import phone from '../assets/img-contact/phone.svg'

import github from '../assets/img-contact/github.svg'
import discord from '../assets/img-contact/discord.svg'
import instagram from '../assets/img-contact/instagram.svg'


// import {BackcallForm} from "../forms/BackcallForm";
const Contact: NextPage = () => {

    // const [modalIsOpen, setModalIsOpen] = useState<boolean> ( false )
    return (
        
        <div className={contact.wrapper} id="contacts">
            {/* <BackcallForm modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen}/> */}
            <div className={contact.connection}>
                <p>Свяжитесь с нами</p>
            </div>
            <div className={contact.types_of_communication}>
                <div className={contact.social_block}>
                    <Image className={contact.telegramimg} src={telegram}/>
                    <p className={contact.lable}>Telegram</p>
                    <p className={contact.communication}>@catlense</p>
                    <input className={contact.btn} type='submit' onClick={() => window.location.href = 'tg://resolve?domain=catlense'} value='Написать в Telegram'/>
                </div>
                <div className={contact.social_block}>
                    <Image className={contact.emailimg} src={email}/>
                    <p className={contact.lable}>E-mail</p>
                    <p className={contact.communication}>hello@catlense.ru</p>
                    <input className={contact.btn} type='submit' onClick={() => window.open('mailto:hello@catlense.ru')} value='Написать на почту'/>
                </div>
                <div className={contact.social_block}>
                    <Image className={contact.phoneimg} src={phone}/>
                    <p className={contact.lable}>Обратный звонок</p>
                    <p className={contact.communication}>Закажите обратный звонок</p>
                    
                    <input className={contact.btn} type='submit' value='Заказать'/>
                    {/* модалку подкл осталость, но там некие правки в css надо будет сделать, желательно создай в папке contact новую папку 
                    modal.module.css and modal.tsx и добавь туда код из Backcallform.module.css and Backcallform.tsx и подправь чутка css */}
                    {/* // onClick={() => {
                    //     setModalIsOpen ( !modalIsOpen )
                    //     document.body.style.overflow = 'hidden'
                    // }} */}
                </div>
            </div>
            <div className={contact.social}>
                <a href='//github.com/catlense-ru' className={contact.github}>
                    <Image className={contact.githubimg} src={github}/>
                    <p className={contact.contact_List}>GitHub</p>
                </a>
                <a href='https://discord.gg/kjAhaetBZ4' className={contact.discord}>
                    <Image className={contact.discordimg} src={discord}/>
                    <p className={contact.contact_List}>Discord</p>
                </a>
                <a href='//instagram.com/catlense.ru' className={contact.instagram}>
                    <Image className={contact.instagramimg} src={instagram}/>
                    <p className={contact.contact_List}>Instagram</p>
                </a>
            </div>
        </div>
    );
};


export default Contact