import React from 'react';
import * as S from './styles/header.styles'
export default function Header(props) {
    return (<S.Header>

                    {props.items.map((item, i) => 
                    <div>
                        <S.A key={i}>{item.home}</S.A>
                        <S.A key={i}>{item.blog}</S.A>
                        <S.A key={i}>{item.about}</S.A>
                        <S.A key={i}>{item.contacts}</S.A>
                    </div>
                )}
    </S.Header>)
}