import React from 'react';
import * as S from './styles/header.styles'
export default function Header(props) {
    return (<S.Header>

                    {props.items.map((item, i) => 
                    <div>
                        <S.A href="#" key={i}><img key={i} src={item.logo} alt={"Logo"}/></S.A>
                        <S.A href="#" key={i}>{item.home}</S.A>
                        <S.A href="#" key={i}>{item.blog}</S.A>
                        <S.A href="#" key={i}>{item.about}</S.A>
                        <S.A href="#" key={i}>{item.contacts}</S.A>
                    </div>
                )}
    </S.Header>)
}