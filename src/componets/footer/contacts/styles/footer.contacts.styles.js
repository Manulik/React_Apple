import styled from 'styled-components';

export const Contacts = styled.div `
    margin-top: 25px;
    width: 300px;
    height: 50px;
    /* background: white; */
    margin: 0 auto;
    div {
        display: flex;
        justify-content: space-evenly;
    }
    img {
        width: 25px;
        :hover {
            cursor: pointer;
        }
    }
    a {
        margin-top: 10px;
    }
`;
