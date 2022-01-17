import React from 'react';
import './ProductsPage.css';

const ProductsPage = ({ itemList }) => {
    // console.log(itemList);
    const { country,thumbnailUrl,url,des} = itemList;
    return (
        <div>
            <h1>products page:{country}</h1>
            <p>products page:{des}</p>
            <img src={url} alt="" />
        </div>
    );
};

export default ProductsPage;