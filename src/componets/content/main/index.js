import React from 'react';
import * as S from './styles/content.main.style';
import Product from './Product/product';
import products from '../../../json/products';
function Main(props) {
    return(
        <S.Main>
            <h1>{props.text}</h1>
                <Product
                    active={true}
                    products={products} />
        </S.Main>
    )
}
export default Main;