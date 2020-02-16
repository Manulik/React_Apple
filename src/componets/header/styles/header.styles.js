import styled from 'styled-components';

export const Header = styled.header `
    width: 100vw;
    height: 50px;
    background: rgba(177, 175, 175, 1);
    margin: 0 auto;
    padding-top: 13px;
    position: fixed;
    z-index: 100;
    margin-bottom: 30px;
    div {
        display: flex;
        justify-content: space-evenly;
        img {
            width: 25px;
            margin: 0;
            padding: 0;
            :hover {
                cursor: pointer;
            }
            position: relative;
            bottom: 5px;
        }
    }
`

export const A = styled.a `
    text-decoration: none;
    color: white;
    :hover {
        cursor: pointer;
        color: rgb(243, 239, 239);
        transition: .3s;
    }
`;