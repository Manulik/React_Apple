import React from 'react';
import * as S from './styles/footer.styles';
import Contacts from './contacts/contacts';
import social from '../../../json/social';

export default function Footer(props) {
    return (
        <S.Footer>
            <h4>{props.name}</h4>
            <p>Site created by {props.creater}</p>
            <Contacts
                socials={social} />
        </S.Footer>
    )
}