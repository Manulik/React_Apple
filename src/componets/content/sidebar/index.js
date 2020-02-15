import React from 'react';
import * as S from './styles/content.sidebar.style';
import Logo from './logo/logo';
import Advertising from './advertising/advertising';
function Sidebar() {
    return (
        <S.Sidebar>
            <div>
                <Logo />
            </div>
            <h1>Apple community</h1>
            <div>
                <Advertising />
            </div>
        </S.Sidebar>
    )
}

export default Sidebar;