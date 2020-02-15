import React from 'react';
import Header from "./../header/index";
import Content from "./../content/index";
import Footer from "./../footer/index";
import '../../styles/style.css';
import menu from '../../json/menu.json';
export default function App() {
    return (
        <div className={"app"}>
            <Header
                active={true}
                items={menu} />
            <Content />
            <Footer
                name = {"Footer"}
                creater={"Nikita Manulik"} />
        </div>
    )
}