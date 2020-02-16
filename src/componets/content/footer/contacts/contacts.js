import React from 'react';
import * as S from './styles/footer.contacts.styles';

export default function Contacts(props)  {
    return (
        <S.Contacts>
            {props.socials.map((social, i) =>
            <div>
                <a key={i}
                    target="_blank"
                    href={social.facebook.href}><img src={social.facebook.imageUrl} alt={social.facebook.name} /></a>
                <a key={i}
                    target="_blank"
                    href={social.instagram.href}><img src={social.instagram.imageUrl} alt={social.instagram.name} /></a>
                <a key={i}
                    target="_blank"
                    href={social.whatsApp.href}><img src={social.whatsApp.imageUrl} alt={social.whatsApp.name} /></a>
                <a key={i}
            w        target="_blank"
                    href={social.skype.href}><img src={social.skype.imageUrl} alt={social.skype.name} /></a>
                <a key={i}
                    target="_blank"
                    href={social.google.href}><img src={social.google.imageUrl} alt={social.google.name} /></a>
            </div>
            )}
        </S.Contacts>
    )
}