import React from 'react';
import * as S from './styles/content.style';
import Main from './main/index';
import Sidebar from './sidebar/index';

export default function Header() {
    return (<S.Container>
            <Sidebar />
            <Main text="Apple" />
    </S.Container>)
}