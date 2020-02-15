import React from 'react';
import * as S from './styles/content.main.products.styles';

function Product(props) {
    if(!props.active) {
        console.log('Not active props');
    } else {
        console.log('Props is active');
    }
    return (
        <S.ProductWrapper>
                {props.products.map((product, p)=>
                    <S.Product key = {p}>
                        <S.imgWrapper>
                            <img src={product.imgUrl} />
                        </S.imgWrapper>
                        <S.aboutProduct>
                            <h5>{product.name}</h5>
                            <p>{product.description}</p>
                        </S.aboutProduct>
                        <S.Price>
                            <p>{product.price}</p>
                        </S.Price>
                        <S.buttonWrapper>
                            <button>Купить</button>
                        </S.buttonWrapper>
                    </S.Product>
                )}
        </S.ProductWrapper>
    )
}

export default Product;