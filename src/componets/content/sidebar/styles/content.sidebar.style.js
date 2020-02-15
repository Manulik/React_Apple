import styled from 'styled-components';

export const Sidebar = styled.div `
    width: 20%;
    height: 100%;
    background: rgb(255, 145, 0);
    position: fixed;
    margin-top: 50px;
    text-align: center;
    padding: 10px;
    border-right: 1px solid black;
    div {
        display: flex;
        justify-content: center;
    }
    h1 {
        margin-top: 20px;
    }
`;
