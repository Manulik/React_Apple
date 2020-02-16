import styled from 'styled-components';

export const ProductWrapper = styled.div `

`;

export const Product = styled.div `
    margin: 0 auto;
    width: 800px;
    min-height: 150px;
    background: white;
    margin-bottom: 20px;
    border-radius: 3px;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    div {
        margin-top: 10px;
    }
`;

export const imgWrapper = styled.div `
    img {
        max-width: 150px;
    }
`;

export const aboutProduct = styled.div `
    width: 500px;
    text-align: left;
    margin-left: 10px;
    h5 {
        font-size: 18px;
    }
    p {
        margin-top: 10px;
        color: rgb(51, 51, 51);
    }
`;

export const Price = styled.div `
    width: 50px;
    margin-left: 30px;
    p {
        font-weight: bold;
        font-size: 18px;
    }
`;

export const buttonWrapper = styled.div `
    width: 105px;
    margin-left: 50px;
    button {
        width: 105px;
        height: 30px;
        background: rgb(238, 119, 0);
        border: none;
        cursor: pointer;
        border-radius: 3px;
        font-size: 15px;
        font-family: Arial, Helvetica, sans-serif;
        :hover {
            background: #cf5d21;
            transition: .5s;
        }
        color: white;
        outline: none;
        :active {
            background: black;
        }
    }
`;